/**
 * 讲请求的拿到的数据转化为标准的AST，便于进行渲染和处理
 * @param origin
 */

const config = {
  subjects: [],
  mapWithKey: {},
  mapWithType: {},
}

const request2AST = (origin) => {
  return walker1(origin)
}

const AST2Request = (ast) => {
  return walker2(ast)
}

const transformAction = (node) => {
  return {
    type: "FILTER_NODE",
    action: {
      type: config.mapWithKey ? "TOPIC_ACTION" : "USER_ACTION",
      detail: {
        action: {
          type: "ID_NODE",
          id: node.actionId,
        },
        target: {
          type: "TEXT_NODE",
          value: node.actionValue
        }
      }
    },
    range: {
      type: "RANGE",
      from: {
        type: "DATE",
        value: node.from
      },
      to: {
        type: "DATE",
        value: node.to
      }
    }
  }
}

const transformNode = (node) => {
  return {
    "subjectId": node.action.type === 'TOPIC_ACTION' ? 0 : 1,
    "subjectName": node.action.type === 'TOPIC_ACTION' ? "话题" : '会员',
    "actionId": +node.action.detail.action.id,
    "actionName": node.action.detail.action.comment || '',
    "actionValue": node.target ? node.target.value : '',
    "from": node.range ? node.range.from.value : '',
    "to": node.range ? node.range.to.value : ''
  }
}

const walker1 = (node) => {
  // compose
  if (node.predicate === 'OR') {
    const children = node.subConditions.map(walker1).concat(node.actions.map(transformAction))
    return {
      type: 'FILTER_OR',
      list: children
    }
  }
  if (node.predicate === 'AND') {
    const children = node.subConditions.map(walker1).concat(node.actions.map(transformAction))
    return {
      type: 'FILTER_AND',
      list: children
    }
  }
  throw TypeError(`Unexpected node, whose type is "${node.predicate}"`)
}

const walker2 = (node) => {
  // compose
  if (node.type === 'FILTER_OR') {
    const [actions, subConditions] = node.list.reduce((prev, cur) => {
      if (cur.type === 'FILTER_NODE') {
        prev[0].push(transformNode(cur));
        return prev
      }
      prev[1].push(cur)
      return prev
    }, [[], []])
    return {
      predicate: "OR",
      actions,
      subConditions: subConditions.map(walker2),
    }
  }
  if (node.type === 'FILTER_AND') {
    const [actions, subConditions] = node.list.reduce((prev, cur) => {
      if (cur.type === 'FILTER_NODE') {
        prev[0].push(transformNode(cur));
        return prev
      }
      prev[1].push(cur)
      return prev
    }, [[], []])
    return {
      predicate: "AND",
      actions,
      subConditions: subConditions.map(walker2),
    }
  }
  throw TypeError(`Unexpected node, whose type is "${node.predicate}"`)
}

const setSubjects = (subjects) => {
  config.subjects = subjects
  subjects.forEach((subject) => {
    config.mapWithKey[subject.id] = subject;
    config.mapWithType[subject.type] = subject;
  })
}

setSubjects([
  {
    id: 2,
    name: '话题',
    type: 'TOPIC_ACTION',
  },
  {
    id: 3,
    name: '用户',
    type: 'USER_ACTION',
  },
])

exports.request2AST = request2AST
exports.AST2Request = AST2Request
exports.setSubjects = setSubjects

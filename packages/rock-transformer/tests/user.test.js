const request2AST = require('../index').request2AST

const origin = {
  actions: [
    { subjectId: 4, subjectName: '会员', actionId: 24, actionName: '会员用户', actionValue: 'default_value', from: '', to: '' }],
  predicate: 'AND',
  subConditions: [
    { predicate: 'AND',
      actions: [
        { subjectId: 3, subjectName: '会员', actionId: 19, actionName: '', actionValue: 'test value', from: '2019-04-17', to: '2019-04-18' }],
      subConditions: [
        { predicate: 'OR',
          actions: [
            { subjectId: 2, subjectName: '话题', actionId: 1, actionName: '', actionValue: 'test value', from: '2019-03-12', to: '2019-03-13' }],
          subConditions: [
            { predicate: 'OR',
              actions: [
                { subjectId: 2, subjectName: '话题', actionId: 3, actionName: '', actionValue: 'test value', from: '2019-04-14', to: '2019-04-18' }],
              subConditions: [] }] }] }] }

const result = request2AST(origin.subConditions[0])

console.log(JSON.stringify(result, null, 2)) //eslint-disable-line


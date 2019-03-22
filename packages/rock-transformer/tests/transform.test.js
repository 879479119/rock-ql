const request2AST = require('../index').request2AST

const origin = {
  "predicate": "OR",
  "actions": [
    {
      "subjectId": 2,
      "subjectName": "话题",
      "actionId": 0,
      "actionName": "收听",
      "actionValue": "test value",
      "from": "2019-03-07 17:27:24",
      "to": "2019-03-07 17:27:24"
    },
    {
      "subjectId": 2,
      "subjectName": "话题",
      "actionId": 0,
      "actionName": "收藏回答",
      "actionValue": "test value",
      "from": "2019-03-07 17:27:24",
      "to": "2019-03-07 17:27:24"
    },
    {
      "subjectId": 2,
      "subjectName": "会员",
      "actionId": 0,
      "actionName": "全部用户",
      "actionValue": "test value",
      "from": "2019-03-07 17:27:24",
      "to": "2019-03-07 17:27:24"
    }
  ],
  "subConditions": [
    {
      "predicate": "OR",
      "actions": [
        {
          "subjectId": 2,
          "subjectName": "话题",
          "actionId": 0,
          "actionName": "回答问题",
          "actionValue": "test value",
          "from": "2019-03-07 17:27:24",
          "to": "2019-03-07 17:27:24"
        },
        {
          "subjectId": 2,
          "subjectName": "话题",
          "actionId": 0,
          "actionName": "评论回答",
          "actionValue": "test value",
          "from": "2019-03-07 17:27:24",
          "to": "2019-03-07 17:27:24"
        },
        {
          "subjectId": 2,
          "subjectName": "会员",
          "actionId": 0,
          "actionName": "会员用户",
          "actionValue": "test value",
          "from": "2019-03-07 17:27:24",
          "to": "2019-03-07 17:27:24"
        }
      ],
      "subConditions": []
    },
    {
      "predicate": "AND",
      "actions": [
        {
          "subjectId": 2,
          "subjectName": "话题",
          "actionId": 0,
          "actionName": "关注话题",
          "actionValue": "test value",
          "from": "2019-03-07 17:27:24",
          "to": "2019-03-07 17:27:24"
        },
        {
          "subjectId": 2,
          "subjectName": "话题",
          "actionId": 0,
          "actionName": "评论回答",
          "actionValue": "test value",
          "from": "2019-03-07 17:27:24",
          "to": "2019-03-07 17:27:24"
        }
      ],
      "subConditions": []
    }
  ]
}

const result = request2AST(origin)

console.log(JSON.stringify(result, null, 2)) //eslint-disable-line


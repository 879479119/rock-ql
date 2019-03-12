const AST2Request = require('../index').AST2Request

const origin = {
  type: "FILTER_AND",
  list: [
    {
      type: "FILTER_OR",
      list: [
        {
          type: "FILTER_NODE",
          action: {
            type: "USER_ACTION",
            detail: {
              action: {
                type: "ID_NODE",
                id: "13"
              },
              target: {
                type: "ID_NODE",
                id: "2",
                comment: "你是不是傻报表"
              }
            }
          },
          range: {
            type: "RANGE",
            from: {
              type: "TIMESTAMP",
              value: 123
            },
            to: {
              type: "TIMESTAMP",
              value: 456
            }
          }
        },
        {
          type: "FILTER_NODE",
          action: {
            type: "USER_ACTION",
            detail: {
              action: {
                type: "ID_NODE",
                id: "13"
              },
              target: {
                type: "ID_NODE",
                id: "23"
              }
            }
          },
          range: {
            type: "RANGE",
            from: {
              type: "DATE",
              value: "2134123"
            },
            to: {
              type: "DATE",
              value: "23432434"
            }
          }
        }
      ]
    },
    {
      type: "FILTER_OR",
      list: [
        {
          type: "FILTER_NODE",
          action: {
            type: "USER_ACTION",
            detail: {
              action: {
                type: "ID_NODE",
                id: "15"
              },
              target: {
                type: "ID_NODE",
                id: "5"
              }
            }
          }
        },
        {
          type: "FILTER_NODE",
          action: {
            type: "USER_ACTION",
            detail: {
              action: {
                type: "ID_NODE",
                id: "16"
              },
              target: {
                type: "ID_NODE",
                id: "8"
              }
            }
          }
        },
        {
          type: "FILTER_NODE",
          action: {
            type: "TOPIC_ACTION",
            detail: {
              action: {
                type: "ID_NODE",
                id: "3"
              },
              target: {
                type: "ID_NODE",
                id: "8"
              }
            }
          }
        },
        {
          type: "FILTER_AND",
          list: [
            {
              type: "FILTER_NODE",
              action: {
                type: "TOPIC_ACTION",
                detail: {
                  action: {
                    type: "ID_NODE",
                    id: "7"
                  },
                  target: {
                    type: "ID_NODE",
                    id: "8"
                  }
                }
              }
            },
            {
              type: "FILTER_NODE",
              action: {
                type: "TOPIC_ACTION",
                detail: {
                  action: {
                    type: "ID_NODE",
                    id: "7"
                  },
                  target: {
                    type: "ID_NODE",
                    id: "8"
                  }
                }
              }
            }
          ]
        }
      ]
    }
    ]
}

const result = AST2Request(origin)

console.log(JSON.stringify(result, null, 2)) //eslint-disable-line


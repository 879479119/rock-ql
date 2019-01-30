import { walk } from '../index.js'


const sample = {
  type: "SELECT",
  selectList: [
    {
      type: "COUNT"
    }
  ],
  source: {
    type: "SOURCE_LIST",
    source: [
      {
        type: "SOURCE_NODE",
        id: "233"
      }
    ],
    filters: {
      type: "WHERE",
      conditions: {
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
                      id: "1"
                    },
                    target: {
                      type: "ID_NODE",
                      id: "2"
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
                      id: "13"
                    },
                    target: {
                      type: "ID_NODE",
                      id: "23"
                    }
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
                      id: "4"
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
    }
  }
};

it("renders without crashing", () => {
  const result = walk(sample)
  expect(result).toBe("ok");
});


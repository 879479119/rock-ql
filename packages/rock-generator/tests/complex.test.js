import { walk } from "../index.js";

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
                      type: "TEXT_NODE",
                      value: "wanwan"
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
                      type: "TEXT_NODE",
                      value: "wanwan"
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
                      id: "4"
                    },
                    target: {
                      type: "TEXT_NODE",
                      value: "wanwan"
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
                      type: "TEXT_NODE",
                      value: "wanwan"
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
                      type: "TEXT_NODE",
                      value: "wanwan"
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
                          type: "TEXT_NODE",
                          value: "wanwan"
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
                          type: "TEXT_NODE",
                          value: "wanwan"
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
    }
  }
};

it("renders without crashing", () => {
  const result = walk(sample);
  expect(result).toBe("ok");
});

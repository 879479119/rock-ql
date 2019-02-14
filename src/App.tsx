import React, {Component, createRef, RefObject} from 'react';
import FilterBuidler from './packages/rock-builder/index'
import logo from './logo.svg';
import 'antd/dist/antd.min.css'
import {Button, Input} from "antd";
import { walk } from './packages/rock-generator'

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
    }
  }
};

class App extends Component {
  state = {
    text: ''
  }
  filterRef: RefObject<FilterBuidler> = createRef()
  handleSubmit = () => {
    if (this.filterRef.current) {
      console.info(this.filterRef.current.getFieldsValue())
    }
  }
  handleGenerate = () => {
    if (this.filterRef.current) {
      this.setState({
        text: walk(this.filterRef.current.getFieldsValue())
      })
    }
  }
  render() {
    return (
      <div className="App">
        <FilterBuidler ref={this.filterRef} filters={sample.source.filters} />
        <div>
          <Button type="primary" onClick={() => this.handleSubmit()} >OK</Button>
          <Button onClick={() => this.handleGenerate()} >generate</Button>
        </div>
        <Input.TextArea value={this.state.text} autosize />
      </div>
    );
  }
}

export default App;

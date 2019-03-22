import React, { Component, createRef, RefObject } from "react";
import FilterBuidler from "./Framework";
import "antd/dist/antd.min.css";
import { Button, Input } from "antd";
import { walk } from "rock-generator";

import TopicActionRule, {Option, OptionCollapse} from './ModifiedComponent/TopicActionRule'
import UserActionRule from "./ModifiedComponent/UserActionRule";

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
                      id: "13"
                    },
                    target: {
                      type: "TEXT_NODE",
                      value: "2",
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
                      type: "TEXT_NODE",
                      value: "23"
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
                      type: "TEXT_NODE",
                      value: "5"
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
                      type: "TEXT_NODE",
                      value: "8"
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
                      type: "TEXT_NODE",
                      value: "8"
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
                          value: "8"
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
                          value: "8"
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

const filter = [
    {
      id: 2,
      name: '话题',
      actions: [
        {
          id: 1,
          category: '话题本身',
          name: '关注话题',
        },
        {
          id: 2,
          category: '话题本身',
          name: '搜索话题',
        },
        {
          id: 3,
          category: '话题本身',
          name: '发起提问',
        },
        {
          id: 4,
          category: '其下相关问题',
          name: '关注问题',
        },
        {
          id: 5,
          category: '其下相关问题',
          name: '回答问题',
        },
        {
          id: 6,
          category: '其下相关创作',
          name: '评论回答',
        },
        {
          id: 7,
          category: '其下相关创作',
          name: '赞同回答',
        },
        {
          id: 8,
          category: '其下相关创作',
          name: '感谢回答',
        },
        {
          id: 9,
          category: '其下相关创作',
          name: '收藏回答',
        },
        {
          id: 10,
          category: '其下付费内容',
          name: '购买',
        },
        {
          id: 11,
          category: '其下付费内容',
          name: '感兴趣',
        },
        {
          id: 12,
          category: '其下付费内容',
          name: '收听',
        },
      ],
    },
    {
      id: 3,
      name: '用户',
      actions: [
        {
          id: 13,
          category: '用户本身',
          name: '关注用户',
        },
        {
          id: 14,
          category: '用户的创作',
          name: '评论回答',
        },
        {
          id: 15,
          category: '用户的创作',
          name: '赞同回答',
        },
        {
          id: 16,
          category: '用户的创作',
          name: '感谢回答',
        },
        {
          id: 17,
          category: '用户的创作',
          name: '收藏回答',
        },
        {
          id: 18,
          category: '用户的文章',
          name: '点赞文章',
        },
        {
          id: 19,
          category: '用户的文章',
          name: '收藏文章',
        },
        {
          id: 20,
          category: '用户的文章',
          name: '评论文章',
        },
        {
          id: 21,
          category: '其下付费内容',
          name: '购买',
        },
        {
          id: 22,
          category: '其下付费内容',
          name: '感兴趣',
        },
        {
          id: 23,
          category: '其下付费内容',
          name: '收听',
        },
      ],
    },
    {
      id: 4,
      name: '会员',
      actions: [
        {
          id: 24,
          category: '是否会员',
          name: '会员用户',
        },
        {
          id: 25,
          category: '是否会员',
          name: '非会员用户',
        },
        {
          id: 26,
          category: '是否会员',
          name: '全部用户',
        },
      ],
    },
  ]

const collapseList = (list: Option []) : OptionCollapse => {
  return list.reduce((prev : OptionCollapse, cur: Option) => {
    if (!prev[cur.category]) {
      prev[cur.category] = [cur]
      return prev;
    }
    prev[cur.category].push(cur)
    return prev
  }, {})
}


class App extends Component<any, any> {
  state = {
    text: ""
  };
  filterRef: RefObject<FilterBuidler> = createRef();
  handleSubmit = () => {
    if (this.filterRef.current) {
      console.info(this.filterRef.current.getFieldsValue());
    }
  };
  handleGenerate = () => {
    if (this.filterRef.current) {
      const res = this.filterRef.current.getFieldsValue();
      if (res !== false) {
        this.setState({
          text: walk(this.filterRef.current.getFieldsValue())
        });
      }
    }
  };
  render() {
    return (
      <div className="App">
        <FilterBuidler
          ref={this.filterRef}
          filters={sample.source.filters}
          rules={{
            TOPIC_ACTION: {
              label: '话题',
              component: TopicActionRule,
              props: {
                actionOptions: collapseList(filter[0].actions),
              }
            },
            USER_ACTION: {
              label: '用户',
              component: UserActionRule,
              props: {
                actionOptions: collapseList(filter[1].actions),
              }
            },
          }}
        />
        <div>
          <Button type="primary" onClick={() => this.handleSubmit()}>
            OK
          </Button>
          <Button onClick={() => this.handleGenerate()}>generate</Button>
        </div>
        <Input.TextArea value={this.state.text} autosize />
      </div>
    );
  }
}

export default App;

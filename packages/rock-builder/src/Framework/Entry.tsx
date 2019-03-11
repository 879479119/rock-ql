import React, { ComponentClass, Fragment, ReactNode } from "react";
import FilterContext from "./Context";

import AndGroup from "../Groups/AndGroup";
import OrGroup from "../Groups/OrGroup";
import ActionRule from "../Rules/ActionRule";
import RangeRule from "../Rules/RangeRule";

// import UserActionRule from "../Rules/UserActionRule";
// import TopicActionRule from "../Rules/TopicActionRule";

interface Props {
  node: any;
}

function Null() {
  return null;
}

/**
 * Facade Component
 */
export default class Entry extends React.Component<Props, object> {
  render(): ReactNode {
    const { type } = this.props.node;
    if (!type) {
      return null;
    }

    let NodeComponent: any = Null;

    if (type === "FILTER_AND") {
      NodeComponent = AndGroup;
    }

    if (type === "FILTER_OR") {
      NodeComponent = OrGroup;
    }
    if (type === "FILTER_NODE") {
      // 现在只有action一种
      NodeComponent = ActionRule;
    }

    /**
     * 上面这三种实际上是核心类型，可以进行拖拽
     * 下面的几种是根据业务场景设计的组件
     */

    if (type === "RANGE") {
      NodeComponent = RangeRule;
    }

    // if (type === "USER_ACTION") {
    //   NodeComponent = UserActionRule;
    // }
    // if (type === "TOPIC_ACTION") {
    //   NodeComponent = TopicActionRule;
    // }

    return (
      <FilterContext.Consumer>
        {context => {
          if(NodeComponent !== Null) {
            return React.createElement(NodeComponent, {
              node: this.props.node,
              errors: context.errors,
              context
            })
          }
          // 剩下的情况就是用户自定义的组件节点了
          return React.createElement(context.rules[type].component, {
            node: this.props.node,
            errors: context.errors,
            context,
            ...context.rules[type].props,
          })
        }}
      </FilterContext.Consumer>
    );
  }
}

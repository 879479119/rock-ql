import React, { ComponentClass, Fragment, ReactNode } from "react";
import AndGroup from "../Groups/AndGroup";
import OrGroup from "../Groups/OrGroup";
import { FilterContext } from "./index";

import ActionRule from "../Rules/ActionRule";
import RangeRule from "../Rules/RangeRule";
import UserActionRule from "../Rules/UserActionRule";
import TopicActionRule from "../Rules/TopicActionRule";

interface Props {
  node: any;
}

function Null() {
  return null;
}

export default class Entry extends React.Component<Props, object> {
  render(): ReactNode {
    const { type, list } = this.props.node;
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

    if (type === "USER_ACTION") {
      NodeComponent = UserActionRule;
    }
    if (type === "TOPIC_ACTION") {
      NodeComponent = TopicActionRule;
    }
    if (type === "RANGE") {
      NodeComponent = RangeRule;
    }

    return (
      <FilterContext.Consumer>
        {(context) =>
          React.createElement(NodeComponent, {
            node: this.props.node,
            errors: context.errors,
            context,
          })
        }
      </FilterContext.Consumer>
    );
  }
}

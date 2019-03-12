import React, {ReactElement, ReactNode} from 'react';
import {OptionCollapse} from "../ModifiedComponent/TopicActionRule";
import {ReactComponentLike} from "prop-types";

interface Props {
  context: any;
  errors: any;
  actionOptions: OptionCollapse;
  node: {
    type: string;
    detail: {
      action: {
        id: number | string;
      };
      target: {
        id: number | string;
      };
    };
  };
}

export default function (WrappedComponent: ReactComponentLike): ReactComponentLike {

  return class TopicActionRule extends React.Component<Props, any> {
    constructor(props: Props) {
      super(props);
      this.state = {
        targetOptions: ["1112", "3334"],
        actionOptions: props.actionOptions,
      };
    }

    actionChange = (val: any) => {
      this.props.context.changeIDNodeValue(this.props.node.detail.action, val)
    };
    targetChange = (val: any) => {
      this.props.context.changeIDNodeValue(this.props.node.detail.target, val)
    };

    render (): ReactNode {
      return React.createElement(WrappedComponent, {
        node: this.props.node,
        errors: this.props.errors,
        actionOptions: this.props.actionOptions,
        actionChange: this.actionChange,
        targetChange: this.targetChange,
      })
    }
  }
}

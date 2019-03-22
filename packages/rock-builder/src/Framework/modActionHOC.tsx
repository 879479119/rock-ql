import React, {ReactElement, ReactNode} from 'react';
import {OptionCollapse} from "../ModifiedComponent/TopicActionRule";
import {ReactComponentLike} from "prop-types";

interface Props {
  disabled: boolean;
  context: any;
  errors: any;
  actionOptions: OptionCollapse;
  actionOptionList: [];
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

  return class AST_HOC extends React.Component<Props, any> {
    constructor(props: Props) {
      super(props);
      this.state = {
        actionOptions: props.actionOptions,
      };
    }

    actionChange = (val: any, comment?: string) => {
      this.props.context.changeIDNodeValue(this.props.node.detail.action, val, comment)
    };
    targetChange = (val: any) => {
      this.props.context.changeTextNodeValue(this.props.node.detail.target, val)
    };

    render (): ReactNode {
      return React.createElement(WrappedComponent, {
        disabled: this.props.disabled,
        node: this.props.node,
        errors: this.props.errors,
        actionOptions: this.props.actionOptions,
        actionOptionList: this.props.actionOptionList,
        actionChange: this.actionChange,
        targetChange: this.targetChange,
      })
    }
  }
}

import React, { ReactNode } from "react";
import Select from "antd/es/select";

import RuleTools from "../Tools/RuleTools";

const { Option } = Select;

interface Props {
  context: any;
  errors: any;
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

export default class TopicActionRule extends React.Component<Props, object> {
  state = {
    targetOptions: ["1112", "3334"],
    actionOptions: ["awsl", "ddddd"]
  };
  componentWillMount() {
    this.setState({});
  }
  actionChange = (val: any) => {
    this.props.context.changeIDNodeValue(this.props.node.detail.action, val)
  };
  targetChange = (val: any) => {
    this.props.context.changeIDNodeValue(this.props.node.detail.target, val)
  };
  render(): ReactNode {
    const { errors, node } = this.props;
    const { action, target } = this.props.node.detail;
    const { targetOptions, actionOptions } = this.state;

    return (
      <span className={errors && errors.has(node) ? "has-error" : ""}>
        对话题&nbsp;&nbsp;
        <Select
          value={target.id}
          placeholder="请选择"
          style={{ width: 100 }}
          onChange={this.targetChange}
        >
          {targetOptions.map(t => (
            <Option key={t}>{t}</Option>
          ))}
        </Select>
        &nbsp;&nbsp; 做了 &nbsp;&nbsp;
        <Select
          value={action.id}
          placeholder="请选择"
          style={{ width: 100 }}
          onChange={this.actionChange}
        >
          {actionOptions.map(t => (
            <Option key={t}>{t}</Option>
          ))}
        </Select>
        &nbsp;&nbsp;
      </span>
    );
  }
}

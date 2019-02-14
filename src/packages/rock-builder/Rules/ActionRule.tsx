import React, { ReactNode } from "react";
import Entry from "../Framework/Entry";
import SplitLine from "../Tools/SplitLine";
import RuleTools from "../Tools/RuleTools";
import { Select } from "antd";

const { Option } = Select;

interface Props {
  context: any;
  node: {
    action: any;
    range?: object;
  };
}

export default class ActionRule extends React.Component<Props, object> {
  private typeChange: any = (val: string) => {
    this.props.context.changeNodeType(this.props.node.action, val);
    this.props.context.clearNodeAction(this.props.node);
  };

  render(): ReactNode {
    const { node } = this.props;
    const { action, range } = node;

    // if (range) {
    //   return (
    //     <div className="rule-tool">
    //       <SplitLine />
    //       <Entry node={action} />
    //       <Entry node={range} />
    //       <RuleTools node={this.props.node} />
    //     </div>
    //   )
    // }

    const options = [
      { key: "USER_ACTION", name: "用户" },
      { key: "TOPIC_ACTION", name: "话题" },
      { key: "RANGE", name: "时间" }
    ];

    return (
      <div className="rule-tool">
        <SplitLine />
        <Select value={node.action.type} onChange={this.typeChange}>
          {options.map(op => (
            <Option key={op.key} value={op.key}>
              {op.name}
            </Option>
          ))}
        </Select>
        &nbsp; &nbsp;
        <Entry node={action} />
        <RuleTools node={this.props.node} />
      </div>
    );
  }
}

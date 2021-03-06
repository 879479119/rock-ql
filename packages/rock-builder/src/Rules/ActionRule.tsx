import React, { ReactNode } from "react";
import Entry from "../Framework/Entry";
import SplitLine from "../Tools/SplitLine";
import RuleTools from "../Tools/RuleTools";
import Select from "antd/es/select";

const { Option } = Select;

interface Props {
  readOnly: boolean
  disabled: boolean
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
    const { node, context, disabled, readOnly } = this.props;
    const { action, range } = node;

    // const options = [
    //   { key: "USER_ACTION", name: "用户" },
    //   { key: "TOPIC_ACTION", name: "话题" }
    // ];
    const options = Object.entries(context.rules).map(([key, value]: [string, any]) => {
      return {
        key, name: value.label
      }
    })

    return (
      <div className="rule-tool">
        <SplitLine />
        {
          readOnly ? null : (
            <Select disabled={disabled} value={node.action.type} style={{ width: 100 }} onChange={this.typeChange}>
              {options.map(op => (
                <Option key={op.key} value={op.key}>
                  {op.name}
                </Option>
              ))}
            </Select>
          )
        }
        &nbsp; &nbsp;
        <Entry node={action} />
        {range ? <Entry node={range} /> : null}
        {
          readOnly ? null : (
            <RuleTools node={this.props.node} disabled={disabled} />
          )
        }
      </div>
    );
  }
}

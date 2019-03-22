import React, { ReactNode } from "react";
import Input from "antd/es/input";
import Select from "antd/es/select";
import modActionHOC from '../Framework/modActionHOC'

const { Option, OptGroup } = Select;

export interface Option {
  id: number;
  category: string;
  name: string;
}

export interface OptionCollapse {
  [name: string]: Array<Option>
}

interface Props {
  targetChange: (e: string) => {}
  actionChange: () => {}
  errors: any;
  actionOptions: OptionCollapse;
  node: {
    type: string;
    detail: {
      action: {
        id: number | string;
      };
      target: {
        value: string;
      };
    };
  };
}

class TopicActionRule extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actionOptions: props.actionOptions,
    };
  }
  render(): ReactNode {
    const { errors, node } = this.props;
    const { action, target } = this.props.node.detail;
    const { actionOptions } = this.state;

    return (
      <span className={errors && errors.has(node) ? "has-error" : ""}>
        对话题&nbsp;&nbsp;
        <Input
          value={target.value}
          placeholder="请输入"
          style={{ width: 100 }}
          onChange={(e) => this.props.targetChange(e.target.value)}
        />
        &nbsp;&nbsp; 做了 &nbsp;&nbsp;
        <Select
          value={action.id}
          placeholder="请选择"
          style={{ width: 100 }}
          onChange={this.props.actionChange}
        >
          {
            Object.entries(actionOptions).map(([key, options] : [string, any]) => (
              <OptGroup label={key} key={key} >
                {
                  options.map((option : Option) => <Option key={option.id + ''} >{option.name}</Option>)
                }
              </OptGroup>
            ))
          }
        </Select>
        &nbsp;&nbsp;
      </span>
    );
  }
}

export default modActionHOC(TopicActionRule);

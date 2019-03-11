import React, { ReactNode } from "react";
import Select from "antd/es/select";

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

export default class TopicActionRule extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      targetOptions: ["1112", "3334"],
      actionOptions: props.actionOptions,
    };
  }
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
          {targetOptions.map((t: string) => (
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
          {
            Object.entries(actionOptions).map(([key, options]: [string, any]) => (
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

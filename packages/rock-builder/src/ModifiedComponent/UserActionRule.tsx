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
  readOnly: boolean
  disabled: boolean
  targetChange: (e: string) => {}
  actionChange: (id: string | number, comment: string) => {}
  errors: any;
  actionOptionList: []
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

class UserActionRule extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actionOptions: props.actionOptions,
    };
  }
  render(): ReactNode {
    const { errors, node, disabled, readOnly } = this.props;
    const { action, target } = this.props.node.detail;
    const { actionOptions } = this.state;

    return (
      <span className={errors && errors.has(node) ? "has-error" : ""}>
        对用户&nbsp;&nbsp;
        <Input
          disabled={disabled}
          value={target.value}
          placeholder="请输入"
          style={{ width: 150 }}
          onChange={(e) => readOnly ? null : this.props.targetChange(e.target.value)}
        />
        &nbsp;&nbsp; 做了 &nbsp;&nbsp;
        <Select
          disabled={disabled}
          value={action.id}
          placeholder="请 选择"
          style={{ width: 120 }}
          onChange={(val: number | string) => {
            if (readOnly) return;
            const item: any = this.props.actionOptionList.find((t: any) => +t.id === +val)
            this.props.actionChange(val, item.name)
          }}
        >
          {
            Object.entries(actionOptions).map(([key, options] : [string, any]) => (
              <OptGroup label={key} key={key} >
                {
                  options.map((option : Option) => <Option key={option.id + ''} value={option.id} >{option.name}</Option>)
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

export default modActionHOC(UserActionRule);

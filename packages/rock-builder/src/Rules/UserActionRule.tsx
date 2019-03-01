import React, {ReactNode} from 'react'
import Select from "antd/es/select";

interface Props {
  errors: any;
  node: {
    type: string
    detail: {
      action: {
        id: number | string
      }
      target: {
        id: number | string
      }
    }
  }
}

export default class UserActionRule extends React.Component<Props, object> {
  render() : ReactNode {
    const { errors, node } = this.props;
    const { action, target } = this.props.node.detail;

    return (
      <span className={errors && errors.has(node) ? 'has-error' : ''} >
        对用户&nbsp;&nbsp;
        <Select value={target.id} placeholder="请选择" style={{ width: 100 }}  />
        &nbsp;&nbsp;
        做了
        &nbsp;&nbsp;
        <Select value={action.id} placeholder="请选择" style={{ width: 100 }}  />
        &nbsp;&nbsp;
      </span>
    )
  }
}

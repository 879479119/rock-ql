import React, {ReactNode} from 'react'
import { Select, Input } from 'antd'
import RuleTools from "../Tools/RuleTools";

interface Props {
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
    const { node } = this.props;
    const { action, target } = node.detail;

    return (
      <span>
        对用户&nbsp;&nbsp;
        <Select value={target.id} style={{ width: 100 }}  />
        &nbsp;&nbsp;
        做了
        &nbsp;&nbsp;
        <Select value={action.id} style={{ width: 100 }}  />
        &nbsp;&nbsp;
      </span>
    )
  }
}

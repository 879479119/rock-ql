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

export default class TopicActionRule extends React.Component<Props, object> {
  render() : ReactNode {
    const { action, target } = this.props.node.detail || { action: { id: 0 }, target: { id: 0 } };

    return (
      <span>
        对话题&nbsp;&nbsp;
        <Select value={target.id} />
        &nbsp;&nbsp;
        做了
        &nbsp;&nbsp;
        <Select value={action.id} />
        &nbsp;&nbsp;
      </span>
    )
  }
}
import React, {ReactNode} from 'react'
import { Select, Input } from 'antd'

interface Props {
  node: {
    type: string
    from: {
      type: string
      value: string | number
    }
    to: {
      type: string
      value: string | number
    }
  }
}

export default class RangeRule extends React.Component<Props, object> {
  render() : ReactNode {
    const { node } = this.props;

    if (!node) {
      return null
    }

    const { from, to } = node;

    return (
      <span >
        从&nbsp;&nbsp;
        <Input style={{ width: 100 }} value={from.value} />
        &nbsp;&nbsp;到&nbsp;&nbsp;
        <Input style={{ width: 100 }} value={to.value} />
        &nbsp;&nbsp;
      </span>
    )
  }
}

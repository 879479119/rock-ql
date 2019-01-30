import React, {ReactNode} from 'react'
import AndGroup from '../Groups/AndGroup'
import OrGroup from '../Groups/OrGroup'


import ActionRule from '../Rules/ActionRule'
import RangeRule from '../Rules/RangeRule'
import UserActionRule from '../Rules/UserActionRule'
import TopicActionRule from '../Rules/TopicActionRule'

interface Props {
  node: any
}

export default class Entry extends React.Component<Props, object> {
  render() : ReactNode {
    const { type, list } = this.props.node;
    if (!type) {
      return null
    }

    if (type === 'FILTER_AND') {
      return <AndGroup list={list} />
    }

    if (type === 'FILTER_OR') {
      return <OrGroup list={list} />
    }
    if (type === 'FILTER_NODE') {
      // 现在只有action一种
      return <ActionRule node={this.props.node} />
    }
    if (type === 'USER_ACTION') {
      return <UserActionRule node={this.props.node} />
    }
    if (type === 'TOPIC_ACTION') {
      return <TopicActionRule node={this.props.node} />
    }
    if (type === 'RANGE') {
      return <RangeRule node={this.props.node} />
    }

    return <span>null</span>
  }
}

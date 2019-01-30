import React, {ReactNode} from 'react'
import Entry from './Entry'

interface Props {
  filters: {
    type: string
    conditions: {
      type: string
    }
  }
}

export default class Framework extends React.Component<Props, object> {
  render() : ReactNode {
    const { conditions } = this.props.filters;
    if (!conditions) {
      return null
    }

    return (
      <div  >
        <Entry node={conditions} />
      </div>
    )
  }
}

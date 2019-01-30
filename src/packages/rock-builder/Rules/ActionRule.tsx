import React, {ReactNode} from 'react'
import Entry from '../Framework/Entry'
import SplitLine from "../Tools/SplitLine";
import RuleTools from "../Tools/RuleTools";

interface Props {
  node: {
    action: object
    range?: object
  }
}

export default class ActionRule extends React.Component<Props, object> {
  render() : ReactNode {
    const { node } = this.props;
    const { action, range } = node;

    if (range) {
      return (
        <div className="rule-tool">
          <SplitLine/>
          <Entry node={action} />
          <Entry node={range} />
          <RuleTools />
        </div>
      )
    }

    return (
      <div className="rule-tool">
        <SplitLine/>
        <Entry node={action} />
        <RuleTools />
      </div>
    )
  }
}

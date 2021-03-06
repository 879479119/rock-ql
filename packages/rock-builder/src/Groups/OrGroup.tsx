import React, {ReactNode} from 'react'
import Entry from '../Framework/Entry'
import GroupTools from "../Tools/GroupTools";
import './index.css'
import GuideLine from "../Tools/GuideLine";

interface Props {
  readOnly: boolean;
  disabled: boolean;
  errors: any;
  node: {
    type: string
    list: {
      type: string
      list: object[]
    }[]
  }
}

export default class OrGroup extends React.Component<Props, object> {
  render() : ReactNode {
    const { node, node: {list}, errors } = this.props;

    if (!list) {
      return null
    }

    return (
      <div className="group" >
        {/*<SplitLine/>*/}
        <GroupTools type="FILTER_OR" node={node} disabled={this.props.disabled} readOnly={this.props.readOnly} />
        <div>
          <GuideLine/>
          {
            errors && errors.has(node) ? (
              <span className="group-error" >{errors.get(node)}</span>
            ) : null
          }
          {
            list.map((item, index) => {
              const ret = [<Entry node={item} key={index} />]
              // if (index !== 0) {
              //   ret.unshift(<span>或</span>)
              // }
              return ret
            })
          }
        </div>
      </div>
    )
  }
}

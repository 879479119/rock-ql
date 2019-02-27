import React, {ReactNode} from 'react'
import Entry from '../Framework/Entry'
import GroupTools from "../Tools/GroupTools";
import './index.css'
import GuideLine from "../Tools/GuideLine";
import SplitLine from "../Tools/SplitLine";

interface Props {
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
      <div style={{ marginLeft: 40 }} className="group" >
        {/*<SplitLine/>*/}
        <GroupTools type="FILTER_OR" node={node} />
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

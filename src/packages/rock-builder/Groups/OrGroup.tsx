import React, {ReactNode} from 'react'
import Entry from '../Framework/Entry'
import GroupTools from "../Tools/GroupTools";
import './index.css'
import GuideLine from "../Tools/GuideLine";
import SplitLine from "../Tools/SplitLine";

interface Props {
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
    const { node, node: {list} } = this.props;
    if (!list) {
      return null
    }

    console.info('render')

    if (list.length === 0) {
      console.info(33333333)
    }

    return (
      <div style={{ marginLeft: 40 }} className="group" >
        {/*<SplitLine/>*/}
        <GroupTools type="FILTER_OR" node={node} />
        <div>
          <GuideLine/>
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

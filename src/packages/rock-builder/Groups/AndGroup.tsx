import React, {ReactNode} from 'react'
import Entry from '../Framework/Entry'
import GroupTools from '../Tools/GroupTools'
import './index.css'
import GuideLine from "../Tools/GuideLine";
import SplitLine from "../Tools/SplitLine";

interface Props {
  list: {
    type: string
    list: object[]
  }[]
}

export default class AndGroup extends React.Component<Props, object> {
  render() : ReactNode {
    const { list } = this.props;
    if (!list || !list.length) {
      return null
    }

    return (
      <div style={{ marginLeft: 40 }} className="group" >
        {/*<SplitLine/>*/}
        <GroupTools type="FILTER_AND" />
        <div>
          <GuideLine/>
          {
            list.map((item, index) => {
              const ret = [<Entry node={item} key={index} />]
              // if (index !== 0) {
              //   ret.unshift(<span>和</span>)
              // }
              return ret
            })
          }
        </div>
      </div>
    )
  }
}

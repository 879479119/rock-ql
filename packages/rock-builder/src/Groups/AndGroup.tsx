import React, { ReactNode, Fragment } from "react";
import Entry from "../Framework/Entry";
import GroupTools from "../Tools/GroupTools";
import "./index.css";
import GuideLine from "../Tools/GuideLine";

interface Props {
  disabled: boolean
  node: {
    type: string;
    list: {
      type: string;
      list: object[];
    }[];
  };
  text: any;
}

export default class AndGroup extends React.Component<Props, object> {
  render(): ReactNode {
    const {
      node,
      node: { list },
    } = this.props;
    if (!list) {
      return null;
    }

    return (
        <div style={{ marginLeft: 40 }} className="group">
          <Fragment>
            <GroupTools type="FILTER_AND" node={node} disabled={this.props.disabled} />
            <div>
              <GuideLine />
              {list.map((item, index) => {
                const ret = <Entry node={item} key={index} />;
                return ret;
              })}
            </div>
          </Fragment>
        </div>
    );
  }
}


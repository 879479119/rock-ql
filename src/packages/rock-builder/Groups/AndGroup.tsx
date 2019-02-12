import React, { ReactNode, Fragment } from "react";
import { DragSource, DropTarget } from "react-dnd";
import { TYPES } from "../utils/constants";
import { FilterContext } from '../Framework'
import Entry from "../Framework/Entry";
import GroupTools from "../Tools/GroupTools";
import "./index.css";
import GuideLine from "../Tools/GuideLine";
import SplitLine from "../Tools/SplitLine";

interface Props {
  node: {
    type: string;
    list: {
      type: string;
      list: object[];
    }[];
  };
  isDragging: boolean;
  connectDragSource: any;
  connectDropTarget: any;
  text: any;
}

class AndGroup extends React.Component<Props, object> {
  render(): ReactNode {
    const {
      node: { list },
      connectDragSource,
      connectDropTarget
    } = this.props;
    if (!list || !list.length) {
      return null;
    }

    return connectDropTarget(
      connectDragSource(
        <div style={{ marginLeft: 40 }} className="group">
          <Fragment>
            <GroupTools type="FILTER_AND" />
            <div>
              <GuideLine />
              {list.map((item, index) => {
                const ret = [<Entry node={item} key={index} />];
                return ret;
              })}
            </div>
          </Fragment>
        </div>
      )
    );
  }
}

export default DragSource(
  TYPES.FILTER,
  {
    beginDrag(props: any) {
      console.info(props.node);
      return {
        node: props.node
      };
    },
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  }
)(
  DropTarget(
    TYPES.FILTER,
    {
      drop(props: any, monitor, component) {
        if (monitor.didDrop()) {
          // If you want, you can check whether some nested
          // target already handled drop
          return;
        }

        console.info(1, props.node)

        const item = monitor.getItem();
        console.info(2, item);
        props.moveNode(item, props.node);

        // Obtain the dragged item

        return { moved: true };
      }
    },
    connect => {
      return {
        connectDropTarget: connect.dropTarget()
      };
    }
  )(AndGroup)
);

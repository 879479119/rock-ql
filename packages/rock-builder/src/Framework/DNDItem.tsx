// import React, { ReactNode } from "react";
// import { DragSource, DropTarget } from "react-dnd";
// import { TYPES } from "../utils/constants";
//
// import Entry from ".//Entry";
// import GroupTools from "../Tools/GroupTools";
// import "./index.css";
// import GuideLine from "../Tools/GuideLine";
// import SplitLine from "../Tools/SplitLine";
//
// interface Props {
//   isDragging: boolean;
//   connectDragSource: any;
//   connectDropTarget: any;
// }
//
// class DNDItem extends React.Component<Props, object> {
//   render(): ReactNode {
//     const { connectDragSource, connectDropTarget } = this.props;
//
//     return connectDropTarget(
//       connectDragSource(
//         React.Children.only(this.props.children)
//       )
//     );
//   }
// }
//
// export default DragSource(
//   TYPES.FILTER,
//   {
//     beginDrag(props: any) {
//       return {
//         text: props.text
//       };
//     }
//   },
//   (connect, monitor) => {
//     return {
//       connectDragSource: connect.dragSource(),
//       isDragging: monitor.isDragging()
//     };
//   }
// )(
//   DropTarget(TYPES.FILTER, {}, connect => {
//     return {
//       connectDropTarget: connect.dropTarget()
//     };
//   })(DNDItem)
// );

export default 1

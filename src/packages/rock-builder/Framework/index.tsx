import React, { ReactNode, createContext } from "react";
import { DragDropContext, DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Entry from "./Entry";
import Rule from "../Domain/Rule";
import Group from "../Domain/Group";
import { assignParentNode } from "../utils/traverse";

interface Props {
  filters: {
    type: string;
    conditions: {
      type: string;
    };
  };
}

interface State {
  tree: any;
  moveNode: any;
  addNode: any;
  collopaseNode: any;
}

export const FilterContext = createContext({
  tree: null,
  moveNode: (from: any, to: any) => {}
});

// @DragDropContext(HTML5Backend)
export default class Framework extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tree: assignParentNode(props.filters),
      moveNode: this.moveNode,
      addNode: this.addNode,
      collopaseNode: this.collopaseNode
    };
  }
  moveNode = (from: any, to: any) => {
    console.info(from, to);
  };
  addNode = (node: string, to: any) => {
    if (node === "rule") {
      to.list.push(new Rule("TOPIC_ACTION", to));
      this.forceUpdate();
    } else if (node === "group") {
      to.list.push(new Group("FILTER_OR", to));
      console.info(this.state)
      this.forceUpdate();
    } else {
      throw TypeError("Unexpected node type, cannot be inserted");
    }
    this.forceUpdate();
  };
  collopaseNode = (node: any, filter: string = "FILTER_OR") => {
    const group = new Group(filter, node.parent);
    if (node.type === "FILTER_NODE") {
      group.list = node.list;
      node.list = [group];
    } else {
      node.parent.list[node.index] = group;
      node.index = 0;
      group.list = [node];
      console.info(this.state);
      this.forceUpdate();
    }
    this.forceUpdate();
  };

  render(): ReactNode {
    const { conditions } = this.state.tree;
    if (!conditions) {
      return null;
    }

    return (
      <div>
        <DragDropContextProvider backend={HTML5Backend}>
        <FilterContext.Provider value={this.state}>
          <Entry node={conditions} />
        </FilterContext.Provider>
        </DragDropContextProvider>
      </div>
    );
  }
}

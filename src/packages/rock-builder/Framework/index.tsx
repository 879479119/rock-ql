import React, { ReactNode, createContext } from "react";
import cloneDeep from 'lodash/cloneDeep'
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
  changeNodeType: any;
  removeNode: any;
  copyeNode: any;
}

export const FilterContext = createContext({
  tree: null,
  moveNode: (from: any, to: any) => {}
});

export default class Framework extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tree: assignParentNode(props.filters),
      moveNode: this.moveNode,
      addNode: this.addNode,
      collopaseNode: this.collopaseNode,
      removeNode: this.removeNode,
      copyeNode: this.copyeNode,
      changeNodeType: this.changeNodeType
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
    const index = node.parent.list.findIndex((t: any) => t === node);
    if (node.type === "FILTER_NODE") {
      node.parent.list[index] = group;
      group.list = [node];
      node.parent = group;
    } else {
      node.parent.list[index] = group;
      group.list = [node];
      node.parent = group;
    }
    this.forceUpdate();
  };
  changeNodeType = (node: any, type: string) => {
    node.type = type;
    this.forceUpdate();
  };
  removeNode = (node: any) => {
    const index = node.parent.list.findIndex((t: any) => t === node);
    node.parent.list.splice(index, 1);
    this.forceUpdate();
  };
  copyeNode = (node: any) => {
    const index = node.parent.list.findIndex((t: any) => t === node);
    console.info(node)
    node.parent.list.splice(index, 0, {
      type: 'FILTER_NODE',
      action: node.action,
      range: node.range,
      parent: node.parent,
    });
    this.forceUpdate();
  };

  render(): ReactNode {
    const { conditions } = this.state.tree;
    if (!conditions) {
      return null;
    }

    return (
      <div>
        <FilterContext.Provider value={this.state}>
          <Entry node={conditions} />
        </FilterContext.Provider>
      </div>
    );
  }
}

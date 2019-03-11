import React, { ReactNode, createContext, RefObject } from "react";
import _ from "lodash";
// import { DragDropContext, DragDropContextProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
import FilterContext, {Rules} from './Context';
import Entry from "./Entry";
import Rule from "../Domain/Rule";
import Group from "../Domain/Group";
import {
  assignParentNode,
  clearParentNode,
  validateNodes
} from "../utils/traverse";

interface Props {
  // ref: RefObject<object>;
  filters: {
    type: string;
    conditions: {
      type: string;
    };
  };
  rules: Rules
}

interface State {
  errors: any;
  tree: any;
  rules: Rules;
  moveNode: any;
  addNode: any;
  collapseNode: any;
  changeNodeType: any;
  removeNode: any;
  clearNodeAction: any;
  clearErrors: any;
  changeIDNodeValue: any;
  changeDateNodeValue: any;
  copyNode: any;
}

export default class Framework extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      errors: null,
      rules: props.rules,
      tree: assignParentNode(props.filters),
      moveNode: this.moveNode,
      addNode: this.addNode,
      collapseNode: this.collapseNode,
      removeNode: this.removeNode,
      copyNode: this.copyNode,
      clearNodeAction: this.clearNodeAction,
      clearErrors: this.clearErrors,
      changeIDNodeValue: this.changeIDNodeValue,
      changeDateNodeValue: this.changeDateNodeValue,
      changeNodeType: this.changeNodeType
    };
  }
  moveNode = (from: any, to: any) => {};
  addNode = (node: string, to: any) => {
    if (node === "rule") {
      to.list.push(new Rule("TOPIC_ACTION", to));
      this.forceUpdate();
    } else if (node === "group") {
      to.list.push(new Group("FILTER_OR", to));
      this.forceUpdate();
    } else {
      throw TypeError("Unexpected node type, cannot be inserted");
    }
    this.clearErrors();
    // this.forceUpdate();
  };
  collapseNode = (node: any, filter: string = "FILTER_OR") => {
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
    // this.clearErrors();
    this.forceUpdate();
  };
  changeNodeType = (node: any, type: string) => {
    node.type = type;
    this.clearErrors();
    // this.forceUpdate();
  };
  changeIDNodeValue = (node: any, val: any) => {
    node.id = val;
    this.clearErrors();
    // this.forceUpdate();
  };
  changeDateNodeValue = (node: any, val: any) => {
    node.value = val;
    this.clearErrors();
    // this.forceUpdate();
  };
  clearNodeAction = (node: any) => {
    if (node.type === "FILTER_NODE") {
      Rule.prototype.clear.call(node);
    }
    // node.clear && node.clear();
    this.clearErrors();
    // this.forceUpdate();
  };
  removeNode = (node: any) => {
    const index = node.parent.list.findIndex((t: any) => t === node);
    node.parent.list.splice(index, 1);
    this.clearErrors();
    // this.forceUpdate();
  };
  copyNode = (node: any) => {
    const index = node.parent.list.findIndex((t: any) => t === node);
    node.parent.list.splice(index, 0, {
      type: "FILTER_NODE",
      action: _.cloneDeep(node.action),
      range: _.cloneDeep(node.range),
      parent: node.parent
    });
    // node.parent.list.splice(index, 0, cloneDeep(node));
    this.clearErrors();
    // this.forceUpdate();
  };

  /**
   * 外部方法调用
   */
  getFieldsValue = () => {
    if (this.validateFieldsValue()) {
      return false;
    }
    return this.state.tree;
  };

  validateFieldsValue = () => {
    const errors = new Map();
    validateNodes(this.state.tree, (node: any) => {
      if (node.type === "FILTER_AND" || node.type === "FILTER_OR") {
        if (node.list.length === 0) errors.set(node, "AND/OR筛选列表不能为空");
      }
      if (node.type === "USER_ACTION" || node.type === "TOPIC_ACTION") {
        if (!node.detail.action.id) errors.set(node, "动作不能设置为空");
        if (!node.detail.target.id) errors.set(node, "目标不能设置为空");
      }
    });
    this.setState({ errors });
    return errors.size ? errors : null;
  };

  clearErrors = (node?: any) => {
    if (!node) {
      this.setState({ errors: null });
      return;
    }
    this.state.errors.delete(node);
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

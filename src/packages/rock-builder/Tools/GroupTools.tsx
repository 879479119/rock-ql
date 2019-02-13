import React, { ReactNode } from "react";
import Entry from "../Framework/Entry";
import { FilterContext } from "../Framework";
import ButtonGroup from "antd/es/button/button-group";
import Button from "antd/es/button/button";
import Dropdown from "antd/es/dropdown/dropdown";
import { Icon, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import "./index.css";

interface Props {
  type: string;
  node: any;
}

export default class GroupTools extends React.Component<Props, object> {
  render(): ReactNode {
    const { type } = this.props;

    return (
      <FilterContext.Consumer>
        {(context: any) => {
          return (
            <div className="group-tool">
              <ButtonGroup>
                <Button
                  onClick={() =>
                    context.changeNodeType(this.props.node, "FILTER_AND")
                  }
                  type={type === "FILTER_AND" ? "primary" : "default"}
                >
                  且
                </Button>
                <Button
                  onClick={() =>
                    context.changeNodeType(this.props.node, "FILTER_OR")
                  }
                  type={type === "FILTER_OR" ? "primary" : "default"}
                >
                  或
                </Button>
              </ButtonGroup>
              &nbsp;&nbsp;
              <ButtonGroup className="ActionBtnGroup">
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <Menu
                      onClick={item =>
                        context.addNode(item.key, this.props.node)
                      }
                    >
                      <MenuItem key="rule">
                        <span className="TypeLabel">规则</span>
                      </MenuItem>
                      <MenuItem key="group">
                        <span className="TypeLabel">规则组</span>
                      </MenuItem>
                    </Menu>
                  }
                >
                  <Button>
                    <Icon type="plus" />
                    <span>添加</span>
                    <Icon type="down" />
                  </Button>
                </Dropdown>
                <Button icon="delete" type="danger" onClick={() => context.removeNode(this.props.node)} >
                  <span>删除组</span>
                </Button>
                <Button
                  onClick={() => {
                    context.collapseNode(this.props.node);
                  }}
                >
                  拆分
                </Button>
              </ButtonGroup>
            </div>
          );
        }}
      </FilterContext.Consumer>
    );
  }
}

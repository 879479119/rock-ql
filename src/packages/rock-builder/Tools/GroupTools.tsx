import React, { ReactNode } from "react";
import Entry from "../Framework/Entry";
import ButtonGroup from "antd/es/button/button-group";
import Button from "antd/es/button/button";
import Dropdown from "antd/es/dropdown/dropdown";
import { Icon, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import './index.css'

interface Props {
  type: string
}

export default class GroupTools extends React.Component<Props, object> {
  render(): ReactNode {
    const { type } = this.props;

    return (
      <div className="group-tool" >
        <ButtonGroup>
          <Button type={ type === 'FILTER_AND' ? 'primary' : 'default' }>且</Button>
          <Button type={ type === 'FILTER_OR' ? 'primary' : 'default' }>或</Button>
        </ButtonGroup>
        &nbsp;&nbsp;
        <ButtonGroup className="ActionBtnGroup">
          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu>
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
          <Button icon="delete" type="danger">
            <span>删除组</span>
          </Button>
          <Button>拆分</Button>
        </ButtonGroup>
      </div>
    );
  }
}

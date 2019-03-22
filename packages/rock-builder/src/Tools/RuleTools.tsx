import React, { ReactNode } from "react";
import ButtonGroup from "antd/es/button/button-group";
import Button from "antd/es/button/button";
import "./index.css";
import FilterContext from "../Framework/Context";

interface Props {
  node: any
  disabled: boolean
}

export default class RuleTools extends React.Component<Props, object> {
  render(): ReactNode {
    const { disabled } = this.props;
    return (
      <FilterContext.Consumer>
        {(context: any) => {
          return (
            <ButtonGroup>
              <Button disabled={disabled} icon="copy" onClick={() => context.copyNode(this.props.node)}  />
              <Button disabled={disabled} icon="delete" type="danger" onClick={() => context.removeNode(this.props.node)} />
              <Button
                disabled={disabled}
                onClick={() => {
                  context.collapseNode(this.props.node);
                }}
              >
                <span style={{ margin: "0 -6px" }}>拆</span>
              </Button>
            </ButtonGroup>
          );
        }}
      </FilterContext.Consumer>
    );
  }
}

import React, { ReactNode } from "react";
import Entry from "../Framework/Entry";
import ButtonGroup from "antd/es/button/button-group";
import Button from "antd/es/button/button";
import "./index.css";
import { FilterContext } from "../Framework";

interface Props {
  node: any
}

export default class RuleTools extends React.Component<Props, object> {
  render(): ReactNode {
    return (
      <FilterContext.Consumer>
        {(context: any) => {
          return (
            <ButtonGroup>
              <Button icon="copy" onClick={() => context.copyeNode(this.props.node)}  />
              <Button icon="delete" type="danger" onClick={() => context.removeNode(this.props.node)} />
              <Button
                onClick={() => {
                  context.collopaseNode(this.props.node);
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

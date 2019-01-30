import React, {ReactNode} from 'react'
import Entry from '../Framework/Entry'
import ButtonGroup from "antd/es/button/button-group";
import Button from "antd/es/button/button";
import './index.css'

interface Props {

}

export default class RuleTools extends React.Component<Props, object> {
  render() : ReactNode {


    return (
      <ButtonGroup >
        <Button icon="copy"  />
        <Button icon="delete" type="danger"  />
        <Button >
          <span style={{margin: '0 -6px'}}>拆</span>
        </Button>
      </ButtonGroup>
    )
  }
}

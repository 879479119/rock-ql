import React, {ReactNode} from 'react'
import moment from "moment";
import DatePicker from "antd/es/date-picker";

const { RangePicker } = DatePicker;

interface Props {
  readOnly: boolean;
  disabled: boolean;
  context: any;
  errors: any;
  node: {
    type: string
    from: {
      type: string
      value: string | number
    }
    to: {
      type: string
      value: string | number
    }
  }
}

export default class RangeRule extends React.Component<Props, object> {
  dateChange = (_: any, strings: [string, string]) => {
    this.props.context.changeDateNodeValue(this.props.node.from, strings[0])
    this.props.context.changeDateNodeValue(this.props.node.to, strings[1])
  };
  render() : ReactNode {
    const { node, errors, disabled, readOnly } = this.props;

    if (!node) {
      return null
    }

    const { from, to } = node;

    return (
      <span className={errors && errors.has(node) ? 'has-error' : ''} >
        在&nbsp;&nbsp;
        <RangePicker
          disabled={disabled}
          value={to.value ? [moment(from.value), moment(to.value)] : undefined}
          showTime={{
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          style={{ width: 240}}
          onChange={(a, b) => readOnly ? null : this.dateChange(a, b)}
        />
        &nbsp;&nbsp;
      </span>
    )
  }
}

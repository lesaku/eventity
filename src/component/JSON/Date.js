import React, { Component } from 'react';
import moment from 'moment';
import '../../App.css'
import { Form, DatePicker, TimePicker,Select, Button, Input } from 'antd';
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;
const InputGroup = Input.Group;
class DatePick extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        'range-time-picker': [
          rangeTimeValue[0].format('DD-MM-YYYY'),
          rangeTimeValue[1].format('DD-MM-YYYY'),
        ],
      };
      console.log('Received values of form: ', values);
    });
  }
  render() {
    
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    return (
      <div className="App">
      <br/>
      <Form onSubmit={this.handleSubmit}>
        
      <InputGroup compact>
        
        <RangePicker format="DD-MM-YYYY"/>
        <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
        <Button type="primary" htmlType="submit">Submit</Button>
       </InputGroup>
        
        
      </Form>
      </div>
    );
  }
}




export default DatePick;
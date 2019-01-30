import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row } from 'antd';

import { handleLogin, logout } from '../utils/auth';

const { Item: FormItem } = Form;

class LoginContent extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        handleLogin(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              autoComplete="username"
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              autoComplete="current-password"
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <Row type="flex" justify="space-between">
          <FormItem>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </FormItem>
          <FormItem>
            <Button type="danger" onClick={logout}>
              Log out
            </Button>
          </FormItem>
        </Row>
      </Form>
    );
  }
}

const WrappedLoginContent = Form.create()(LoginContent);

export default WrappedLoginContent;

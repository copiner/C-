import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import stl from './index.css'

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../../actions/login';

function LoginForm(props) {

  const [login, setLogin] = useState({ username: "",password: "" });

  const printValues = e => {
    e.preventDefault();
    //console.log(login.username, login.password);
    props.loginSt(login)
  };

  const updateField = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={stl.login}>
      <h1>用户登陆</h1>
      <p>
        <Input placeholder="用户名" prefix={<UserOutlined />} value={login.username} name="username" onChange={updateField} />
      </p>
      <p>
        <Input.Password
        prefix={<LockOutlined />}
        placeholder="密码"
        value={login.password}
        name="password"
        onChange={updateField}
        />
      </p>
      <p>
        <Button type="primary" block onClick={printValues} >Submit</Button>
      </p>
    </div>
  );
}

export default LoginForm;
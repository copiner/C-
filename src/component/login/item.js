/*
  8-20位数字与字母组合输入框
*/
import React from 'react';
import { Input, message } from 'antd';

function PasswordInput(props) {

  const passwordv = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;

  const validateField = e => {
    if(!passwordv.test(props.value)){
      message.warning('密码要求8-20位数字与字母组合');
      props.clear(e);
    }
  };


  return (
    <>
      <Input.Password
        prefix={ props.prefix }
        placeholder = { props.placeholder }
        name={ props.name }
        value={ props.value }
        onBlur={ validateField }
        onChange={ props.update }
        />
    </>
  );
}

export default PasswordInput;

import React from 'react';
import { connect } from 'dva';
import Box from './login/index';
import styles from '../components/layout/main.less';
import { Spin } from 'antd';
import '../components/layout/common.less';

const Login = ({ location, dispatch, app, loading }) => {
  const {
    login,
    loginButtonLoading,
    user,
    siderFold,
    darkTheme,
    isNavbar,
  } = app;
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
      dispatch({ type: 'app/login', payload: data });
    },
  }

  return (
    <div className={styles.spin}>
      <Spin tip="加载用户信息..." spinning={false} size="large">
        <Box {...loginProps} />
      </Spin>
    </div>
  )
}

function mapStateToProps({ app }) {
  return { app };
}

export default connect(mapStateToProps)(Login);

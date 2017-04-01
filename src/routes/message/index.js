import React, { PropTypes } from 'react';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';
import styles from './message.less';
import { color } from '../utils';

function Message({ message }) {
  return (
  	<div className="content-inner">message</div>
  )
}

Message.propTypes = {
  message: PropTypes.object,
}

export default connect(({ message }) => ({ message }))(Message);

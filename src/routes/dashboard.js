import React, { PropTypes } from 'react'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import styles from './dashboard.less'
import { color } from '../utils'

function Dashboard({ dashboard }) {
  return (
  	<div className="content-inner">dashboard</div>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)

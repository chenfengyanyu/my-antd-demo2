import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'

function Users({ location, dispatch, users, loading }) {
  return (
    <div className="content-inner">
    users
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

export default connect(({ users, loading }) => ({ users, loading: loading.models.user }))(Users)

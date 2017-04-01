import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

function Account({ location, dispatch, account, loading }) {
  return (
    <div className="content-inner">
    account
    </div>
  )
}

Account.propTypes = {
  account: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
}

export default connect(({ account, loading }) => ({ account, loading: loading.models.user }))(Account);

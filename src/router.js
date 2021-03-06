import React, { PropTypes } from 'react';
import { Router } from 'dva/router';
import App from './routes/app';
import Login from './routes/login';

const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/login',
      component: Login,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./routes/login/') });
        }, 'login');
      },
    }, {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          // registerModel(app, require('./models/dashboard'))
          cb(null, { component: require('./routes/account/index') })
        }, 'account')
      },
      childRoutes: [
        {
          path: 'account',
          name: 'account',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/dashboard'))
              cb(null, require('./routes/account/index'))
            }, 'account')
          },
        }, {
          path: 'users',
          name: 'users',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              // registerModel(app, require('./models/users'))
              cb(null, require('./routes/users/index'))
            }, 'users')
          },
        }, {
          path: '*',
          name: 'error',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/index'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers

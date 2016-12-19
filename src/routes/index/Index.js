import React, { Component, PropTypes } from 'react';
import styles from './Index.css';
import Menu from '../../layout/_Menu';

const Index = React.createClass({
  render() {
    return (
      <div>
        <Menu />
      </div>
      );
  }
});

Index.propTypes = {
};

export default connect()(Index);

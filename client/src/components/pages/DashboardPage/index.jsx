import React, { Component } from 'react';
import Sidebar from '../../Sidebar';
import withAuthContext from '../../../hoc/withAuthContext';
import styles from './styles.css';

class DashboardPage extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {

    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar title="Sidebar"/>
        </div>
        <div className={styles.content}>
          <h1 style={{ textAlign: 'center', fontWeight: 500 }}>Content</h1>
        </div>
      </div>
    );
  }
}

export default withAuthContext(DashboardPage);

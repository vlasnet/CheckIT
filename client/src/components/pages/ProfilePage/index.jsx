import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routing/index';
import navlinkStyles from '../../Navigation/styles.css'

const ProfilePage = () => (
  <div>
    <h1 style={{ textAlign: 'center', fontWeight: 500 }}>
      Profile Page Placeholder
    </h1>
    <NavLink
      className={navlinkStyles.link}
      activeClassName={navlinkStyles.active}
      style={{ width: '250px', maxHeight: '70px', color: '#000', backgroundColor: '#aaa', margin: '0 auto', textAlign: 'center' }}
      to={routes.dashboard}>
      {'Go back to dashboard'}
    </NavLink>
  </div>
);

export default ProfilePage;

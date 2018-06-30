import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import Image from '../shared/Image';
import TotalUser from '../shared/userData/totalUser';

import PrivateRoute from '../shared/PrivateRoute';
import AppBar from '../AppBar';
import Footer from '../Footer';
import routerConfig, { routes } from '../../routing';
import { AuthContext } from '../../context';
import { initAuthStateListener } from '../../firebase';
import styles from './styles.css';
import imageStyles from '../shared/Image/styles.css';
import placeholderAvatar from '../shared/Image/placeholder.png';

const initialState = {
  email: null,
  displayName: null,
  isLoading: false,
  userId: null,
  isAuth: false,
  isModalOpen: false
};

Modal.setAppElement('#root');

export default class App extends Component {
  state = { ...initialState };

  componentDidMount() {
    initAuthStateListener({
      onSignIn: this.handleLogin,
      onSignOut: this.handleLogout,
    });
  }

  handleLogin = user =>
    this.setState({
      isLoading: false,
      userId: user.uid,
      email: user.email,
      displayName: user.displayName,
      isAuth: true,
    });

  handleModalToggle = () => {
    const { isModalOpen } = this.state;

    this.setState({ isModalOpen: !isModalOpen });
  };

  handleLogout = () => this.setState({ ...initialState });

  render() {
    const { isAuth, isModalOpen, displayName } = this.state;
    const { public: publicRoutes, private: privateRoutes } = routerConfig;
    const { roundImage, modalMainImage } = imageStyles;

    return (
      <AuthContext.Provider value={{ ...this.state }}>
        <div className={styles.app}>
          {isAuth && <AppBar toggleModal={this.handleModalToggle} name={displayName} />}

          <Switch>
            {publicRoutes.map(route => <Route key={route.path} {...route} />)}

            {privateRoutes.map(route => (
              <PrivateRoute
                key={route.path}
                isAuthenticated={isAuth}
                {...route}
              />
            ))}

            <Redirect to={routes.login} />
          </Switch>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={this.handleModalToggle}
            overlayClassName={`${styles.modalBackdrop} ${styles.modalBackdropWithMainImage}`}
            className={`${styles.modal} ${styles.modalWithMainImage}`}
          >
            <button
              className={styles.modalCloseButton}
              onClick={this.handleModalToggle}
            >&#10006;</button>
            <div>
              <Image
                width={160}
                height={160}
                wrapperExtraClasses={`${roundImage} ${modalMainImage}`}
                alt='User Avatar'
                src={placeholderAvatar}
              />
                <TotalUser/>
            </div>
          </Modal>
          {isAuth && <Footer />}
        </div>
      </AuthContext.Provider>
    );
  }
}

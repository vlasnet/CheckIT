import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import Button from '../../shared/Button';
import SocialsButtons from "../../shared/SocialsButtons";
import styles from './styles.css';

export default class RegisterForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    data: {
      email: '',
      password: '',
      name: '',
    },
    errors: {},
    isValidationSuccess: true,
    isPassVisible: false,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const errors = this.validate(this.state.data);

    this.setState({ errors }, () => {
      if (Object.keys(errors).length === 0) {
        this.props.onSubmit(this.state.data);
      }
    });
  };

  toglePasswordVisible = evt => {
    evt.preventDefault();
    this.setState({
      isPassVisible: !this.state.isPassVisible,
    })
  };

  validate = data => {
    const errors = {};
    const { password } = data;
    const passwordPattern = /\s+/;
    const checkPassword = !(
      passwordPattern.test(password) ||
      password.length < 5 ||
      password.length > 32
    );

    if (!checkPassword) {
      errors.password = 'This is not a valid password';
    }

    if (!Validator.isEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.name) {
      errors.name = 'Enter your real name';
    }

    return errors;
  };

  render() {
    const {
      data: { email, password, name },
      isValidationSuccess,
      isPassVisible,
    } = this.state;

    const nameClass = `${styles.item} ${styles.avatar}`;
    const mailClass = `${styles.item} ${styles.mail}`;
    const passClass = `${styles.item} ${styles.pass}`;
    const passwordInputType = isPassVisible ? 'text' : 'password';
    const showPass = [ styles.button,
      isPassVisible ? styles.open_eye : styles.close_eye
    ].join(' ');
    const validationResult = [styles.error_status,
      isValidationSuccess ? styles.confirm : styles.fail
    ].join(' ');

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.title}>Регистрация</div>
        <ul className={styles.list}>
          <li className={nameClass}>
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder="Имя Фамилия"
              value={name}
              onChange={this.handleChange}
            />
            <div className={validationResult}/>
          </li>

          <li className={mailClass}>
            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder="Почта"
              value={email}
              onChange={this.handleChange}
            />
            <div className={validationResult}/>
          </li>
          <li className={passClass}>
            <input
              type={passwordInputType}
              name="password"
              className={styles.input}
              placeholder="Пароль"
              value={password}
              onChange={this.handleChange}
            />
            <button className={showPass} onClick={this.toglePasswordVisible}/>
          </li>
        </ul>
        <SocialsButtons/>
        <Button type="submit" text="Зарегистрироваться" primary />
      </form>
    );
  }
}

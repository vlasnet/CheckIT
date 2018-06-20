import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import Button from '../../shared/Button';
import styles from './styles.css';

export default class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    data: {
      email: '',
      password: '',
      checked: false,
    },
    errors: {},
    isValidationSuccess: true,
    isPassVisible: false,
  };

  handleChange = e => {
    const target = e.target;
    const { name } = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

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

    if (!data.password) {
      errors.password = 'This is not a valid password';
    }

    if (!Validator.isEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  render() {
    const {
      data: { email, password, checked },
      isValidationSuccess,
      isPassVisible,
    } = this.state;

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
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.title}>Вход</div>
        <ul className={styles.list}>
          <li className={mailClass}>
            <input
              type="email"
              id="email"
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
              id="password"
              name="password"
              className={styles.input}
              placeholder="Пароль"
              value={password}
              onChange={this.handleChange}
            />
            <button className={showPass} onClick={this.toglePasswordVisible}/>
          </li>
        </ul>
        <div className={styles.passOptions}>
          <div className={styles.checkbox}>
            <input type="checkbox" name="checked" checked={checked} onChange={this.handleChange}/>
            <label className={styles.remember_label} htmlFor="checked">Запомнить меня</label>
          </div>
            <a className={styles.restore} href="/">Восстановить пароль</a>
        </div>
        <div className={styles.buttonsWrapper}>
          <Button type="submit" text="Facebook" facebook social />
          <Button type="submit" text="Google +" google social />
          <Button type="submit" text="Linked In"  linkedin social />
        </div>
        <Button type="submit" text="Войти" primary />
      </form>
    );
  }
}

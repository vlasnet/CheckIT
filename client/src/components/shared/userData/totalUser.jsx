import React from 'react';
import FullName from './fullName';
import Login from "./login";
import Email from "./email";
import CorrectPass from "./correctPass";
import ReconfPass from "./reconfPass";
import styles from './styles.css';
import './style.css'


const TotalUser = () => (
    <div className={styles.total_user}>
        <FullName title/>
        <img className={styles.pencil} src="./pencil.svg" alt=''/>
        <h3 className={styles.title_info}>Персональная информация</h3>
        <p className={styles.title_name}>Имя Фамилия</p>
        <FullName general/>
        <p className={styles.login_title}>Логин</p>
        <Login/>
        <p className={styles.email_title}>Електронная почта</p>
        <Email/>
        <h3 className={styles.change_pass}>Смена Пароля</h3>
        <p className={styles.pass_title}>Cтарий пароль</p>
        <ReconfPass/>
        <img className={styles.eyeOpen} src="./eyeOpen.svg" alt=''/>
        <p className={styles.pass_title}>Новий пароль</p>
        <CorrectPass/>
        <img className={styles.eyeClose} src="./eyeClose.svg" alt=''/>
    </div>
)

export default TotalUser;


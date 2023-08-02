import React, { useState } from 'react'

import Rocket from '../../assets/rocket.png'
import FormGroup from '../../components/form group'

import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        if (username.trim() !== '') {
            localStorage.setItem('username', username);
            localStorage.setItem('isAuth', true);

            navigate('/dashboard')
        }
    };

    return (
        <section className={styles['login-container']}>
            <div className={styles['image-container']}>
                <img src={Rocket} alt="Login Image" width="300" height="300" />
                <label className={styles['image-caption']}>Let's explore</label>
            </div>

            <form className={styles['login-form']} onSubmit={handleLogin}>
                <h1 className={styles['form-title']}>Take the first step</h1>
                <FormGroup label='User Name' name='username' changeHandler={(e) => setUsername(e.target.value)} />
                <FormGroup label='Password' name='password' />

                <button type='submit' className={styles.btn}>Login</button>
            </form>

        </section>
    )
}

export default Login
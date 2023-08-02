import React from 'react';
import styles from './formgrp.module.css';

const FormGroup = ({ label, name, changeHandler
}) => {
    return (
        <div className={styles['form-group']}>
            <input
                type="text"
                id={name}
                name={name}
                onChange={changeHandler}
                placeholder={name.charAt(0).toUpperCase() + name.slice(1)}

                required
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};

export default FormGroup;

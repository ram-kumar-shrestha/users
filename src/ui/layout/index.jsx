import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar";

import styles from './layout.module.css'

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const isAuthenticated = JSON.parse(localStorage.getItem("isAuth")) === true;

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <section className={styles.page}>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </section>
    );
};

export default Layout;

// Sidebar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import NavItem from "../../components/nav item";
import { ArrowLeft, ArrowRight } from "feather-icons-react/build/IconComponents";
import Button from "../../components/btn";
import Navigation from "./Navigation";

const Sidebar = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("isAuth");
        navigate("/");
    };

    return (
        <>

            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
                <h1 className={styles['menu-name']}>Users Dashboard</h1>

                <Navigation />

                <div className={styles.actions}>
                    <Button
                        className={styles.logout}
                        name="Logout"
                        eventHandler={handleLogout}
                    />
                    <Button
                        className={styles["slide-left"]}
                        name={<ArrowLeft size={24} />}
                        eventHandler={handleToggleSidebar}
                    />
                </div>
            </aside>
            <Button
                className={styles["slide-right"]}
                name={<ArrowRight size={24} />}
                eventHandler={handleToggleSidebar}
            />
        </>

    );
};

export default Sidebar;

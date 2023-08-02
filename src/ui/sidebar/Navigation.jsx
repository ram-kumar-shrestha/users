import React, { useState } from 'react'
import NavItem from '../../components/nav item';

const navItems = [
    { href: "/dashboard", linkName: "Dashboard" },
    { href: "/all-users", linkName: "Users" },
];


const Navigation = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleNavItemClick = (index) => {
        setActiveLink(index);
    };
    return (
        <nav>
            <ul>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        linkName={item.linkName}
                        isActive={activeLink === index}
                        onClick={() => handleNavItemClick(index)}
                    />
                ))}{" "}
            </ul>
        </nav>
    )
}

export default Navigation
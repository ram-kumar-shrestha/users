import React, { useState, useEffect } from 'react';
import UserFilter from '../../ui/users/UserFilter';
import UserRow from '../../ui/users/UserRow';
import styles from './users.module.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRole, setFilterRole] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('src/data/users.json');
            const data = await response.json();
            setUsers(data?.users);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const filteredUsers = users.filter((user) => {
        const roleMatch = filterRole ? user.role === filterRole : true;
        const searchTerms = Object.values(user).join(' ').toLowerCase();
        return roleMatch && searchTerms.includes(searchQuery.toLowerCase());
    });

    const uniqueRoles = [...new Set(users.map((user) => user.role))];

    return (
        <div className={styles.container}>
            <UserFilter
                value={searchQuery}
                onChange={handleSearchChange}
                uniqueRoles={uniqueRoles}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user, index) => (
                        <UserRow key={index} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;

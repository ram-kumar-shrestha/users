
import styles from './users.module.css'
const UserFilter = ({ value, onChange, uniqueRoles }) => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search users..."
            />
            <select value={value} onChange={onChange}>
                <option value="">All Roles</option>
                {uniqueRoles.map((role, index) => (
                    <option key={index} value={role}>
                        {role}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UserFilter;

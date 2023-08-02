
import styles from './users.module.css'

const UserRow = ({ user }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.phone}</td>
        </tr>
    );
};

export default UserRow;

import { Link } from "react-router-dom";

function ManageUser({ users, deleteUser }) {

    return (
        <>
            <h1>Manage Users</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-user"><button>Create User</button></Link></p>
            {users.length === 0 ? (
                <p>No Users Created</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Display Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Created Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.createdAt}</td>

                                <td><button onClick={() => deleteUser(index)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </>
    );
}
export default ManageUser;
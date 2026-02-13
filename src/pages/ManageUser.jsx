import { Link } from "react-router-dom";

function ManageUser({users}) {
    
    

    return (
        <>
            <h1>Manage Users</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-user"><button>Create User</button></Link></p>
            {users.length === 0 ? (
                <p> </p>
            ) :(
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Display Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) =>(
                            <tr key = {index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
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
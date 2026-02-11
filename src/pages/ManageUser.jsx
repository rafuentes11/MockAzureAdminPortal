import { Link } from "react-router-dom";

function ManageUser() {
    return (
        <>
            <h1>Manage Users</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-user"><button>Create User</button></Link></p>
            
        </>
    );
}
export default ManageUser;
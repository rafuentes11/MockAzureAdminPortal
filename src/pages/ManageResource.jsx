import { Link } from "react-router-dom"

function ManageResource() {
    return (
        <>
            <h1>Manage Resources</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-resource"><button>Create Resource</button></Link></p>
        </>
    );
}
export default ManageResource;
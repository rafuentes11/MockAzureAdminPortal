import { Link } from "react-router-dom";

function ManageResourceGroup() {
    return (
        <>
            <h1>Manage Resource Groups</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to ="/create-resource-group"><button>Create Resource Group</button></Link></p>
        </>
    );
}
export default ManageResourceGroup;
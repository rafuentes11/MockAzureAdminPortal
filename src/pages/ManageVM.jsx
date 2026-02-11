import { Link } from "react-router-dom";

function ManageVM() {
    return (
        <>
            <h1>Manage VMs</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-vm"><button>Create VM</button></Link></p>
        </>
    );
}
export default ManageVM;
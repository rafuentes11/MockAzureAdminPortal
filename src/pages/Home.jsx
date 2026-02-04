import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Home</h1>
            
            <h3>Services</h3>
            <div className="azureServices">
                <p><Link to="/manage-user"><button>Manage Users</button></Link> </p>
                <p><Link to="/manage-vm"><button>Manage VMs</button></Link></p>
                <p><Link to="/manage-resource"><button>Manage Resources</button></Link></p>
                <p><Link to="/manage-resource-group"><button>Manage Resource Groups</button></Link></p>
            </div>
            <h3>Resources</h3>
            <div className="Resources">
                <p></p>
            </div>
        </>
    );
}
export default Home;
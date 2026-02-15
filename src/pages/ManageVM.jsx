import { Link } from "react-router-dom";

function ManageVM({vms}) {
    return (
        <>
            <h1>Manage VMs</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-vm"><button>Create VM</button></Link></p>
            {vms.length ===0 ?(
                <p>No VMs created</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Size</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vms.map((vm, index) => (
                           <tr key={index}>
                                <td>{vm.name}</td>
                                <td>{vm.status}</td>
                                <td>{vm.size}</td>

                           </tr>  
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
export default ManageVM;
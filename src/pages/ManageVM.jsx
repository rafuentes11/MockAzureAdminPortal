import { Link } from "react-router-dom";

function ManageVM({ vms, setVMs, deleteVM }) {

    const toggleStatus = (id) => {
        setVMs(prev =>
            prev.map(vm => {
                if (vm.id === id) {
                    if (vm.status === "Offline") {
                        const updatedVM = { ...vm, status: "Running" };
                        setTimeout(() => {
                            setVMs(currentVMs =>
                                currentVMs.map(v =>
                                    v.id === updatedVM.id && v.status === "Running"
                                        ? { ...v, status: "Online" } : v
                                )
                            );
                        }, 5000);
                        return updatedVM;
                    } else if (vm.status === "Online") {

                        return {
                            ...vm,
                            status: "Offline"
                        };

                    }
                }
                return vm;
            })
        );
    };

    return (
        <>
            <h1>Manage VMs</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/create-vm"><button>Create VM</button></Link></p>
            {vms.length === 0 ? (
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
                                <td>{vm.size.cpu} CPU / {vm.size.ram} GB RAM</td>
                                <td>{vm.image}</td>

                                <td><button onClick={() => deleteVM(index)}>Delete</button></td>
                                <td><button onClick={() => toggleStatus(vm.id)}>{vm.status === "Online" ? "Stop" : "Start"}</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
export default ManageVM;
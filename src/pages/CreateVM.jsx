import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function CreateVM({ setVMs }) {
    const navigate = useNavigate();
    const images = ["Ubuntu", "Windows", "CentOS", "Red Hat"];
    const sizes = [
        { cpu: 1, ram: 2 },
        { cpu: 2, ram: 4 },
        { cpu: 4, ram: 8 },
        { cpu: 8, ram: 16 },
        { cpu: 16, ram: 32 },
        { cpu: 32, ram: 64 },
    ];
    const [vmData, setVMData] = useState({
        name: "",
        image: "",
        size: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVMData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedSize = sizes[vmData.size];
        const newData = {
            id: Date.now(),
            ...vmData,
            status: "Running",
            size: selectedSize
        };
        setVMs(prev => [...prev, newData]);

        setTimeout(() => {

            setVMs(prev =>
                prev.map(vm =>
                    vm.id === newData.id && vm.status === "Running"
                        ? { ...vm, status: "Online" } : vm
                )
            );
        }, 5000);
        console.log(newData);

        navigate("/manage-vm");
    }

    return (
        <>
            <h1>Create VMs</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/manage-vm"><button>Manage VMs</button></Link></p>
            <div className="createVMForm">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label>Number of VMs:</label>
                        <input
                            type="number"
                            name="numberOfVMs"
                            value={vmData.numberOfVMs}
                            onChange={handleChange}
                            placeholder="Number of VMs"
                        />

                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={vmData.name}
                            onChange={handleChange}
                            placeholder="Name" />

                        <label>Image:</label>
                        <select
                            name="image"
                            value={vmData.image}
                            onChange={handleChange}
                        >
                            <option>Select Image</option>
                            {images.map((image, index) => (
                                <option key={index} value={image}>
                                    {image}
                                </option>
                            ))}
                        </select>
                        <label>Size:</label>
                        <select
                            name="size"
                            value={vmData.size}
                            onChange={handleChange}
                        >
                            <option>Select Size</option>
                            {sizes.map((size, index) => (
                                <option key={index} value={index}>
                                    {size.cpu} CPU / {size.ram} GB RAM
                                </option>
                            ))}
                        </select>
                        <br />
                        <button type="submit">Create VM</button>
                    </section>
                </form>
            </div>
        </>
    );
}
export default CreateVM;
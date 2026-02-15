import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function CreateUser({ setUsers }) {
    const roles = ["Global Admin", "Member", "Guest"];
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        displayName: "",
        email: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.displayName || !formData.email || !formData.password || !formData.role) {
            alert("Please fill in all fields");
            return;
        }
        const nameRegex = /^[a-zA-Z]+$/;
        if (!nameRegex.test(formData.firstName)) {
            alert("First name must contain only letters");
            return;
        }
        if (!nameRegex.test(formData.lastName)) {
            alert("Last name must contain only letters");
            return;
        }
        if (!nameRegex.test(formData.displayName)) {
            alert("Display name must contain only letters");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            alert("Password must be at least 8 characters long and contain at least one letter and one number");
            return;
        }

        const newUser = {
            ...formData,
            createdAt: new Date().toLocaleString()
        };

        setUsers(prev => [...prev, newUser]);
        navigate("/manage-user");
    };


    return (
        <>
            <h1>Create Users</h1>
            <p><Link to="/"><button>Home Dashboard</button></Link></p>
            <p><Link to="/manage-user"><button>Manage Users</button></Link></p>
            <div className="createUserForm">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name" />
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name" />
                        <label>Display Name:</label>
                        <input
                            type="text"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            placeholder="Display Name" />
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email" />
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password" />
                        <label>Role:</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="">Select Role</option>
                            {roles.map((role, index) => (
                                <option key={index} value={role}>
                                    {role}
                                </option>
                            ))}
                        </select>
                        
                        <br/>
                        <button type="submit">Create User</button>
                    </section>
                </form>

            </div>
        </>
    );
}
export default CreateUser;
import { Link } from "react-router-dom";

function CreateUser(){
    return(
        <>
        <h1>Create Users</h1>
         <p><Link to="/"><button>Home Dashboard</button></Link></p>
         <div className="createUserForm">
            <form>
                <section>
                    <label>First Name:</label>
                    <input type="text" placeholder="First Name"/>
                    <label>Last Name:</label>
                    <input type="text" placeholder="Last Name"/>
                    <label>Email:</label>
                    <input type="email" placeholder="Email"/>
                    <label>Password:</label>
                    <input type="password" placeholder="Password"/>
                    <label>Role:</label>
                    <select>
                        <option>Select Role</option>
                    </select>
                    <br/>
                    <button>Create User</button>
                </section>
            </form>

         </div>
        </>
    );
}
export default CreateUser;
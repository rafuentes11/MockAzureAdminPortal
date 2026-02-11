import { Link } from "react-router-dom";

function CreateVM(){
    return(
        <>
        <h1>Create VMs</h1>
         <p><Link to="/"><button>Home Dashboard</button></Link></p>
         <div className="createVMForm">
            <form>
                <section>
                    <label>Number of VMs:</label>
                    <input type="number" placeholder="Number of VMs"></input>
                    <label>Name:</label>
                    <input type="text" placeholder="Name"></input>
                    <label>Image:</label>
                    <select>
                        <option>Select Image</option>
                    </select>
                    
                </section>
            </form>
         </div>
        </>
    );
}
export default CreateVM;
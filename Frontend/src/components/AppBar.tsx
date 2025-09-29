import axios from "axios";
import { useState } from "react";

export const AppBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const addEmp = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        await axios.post(`http://localhost:3000/api/employee`, {
            name, email, position
        })
        
        await props.getAllEmp();
        setIsOpen(false);
    }

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [position, setposition] = useState("");
    
    return (
        <div className="flex justify-baseline">
            <div>Employees</div>

            <button type="button" onClick={() => setIsOpen(true)} className="text-white hover:text-white border bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">+ Employees</button>


            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">Edit Employee</h3>

                        <form onSubmit={(e) => addEmp(e)}>
                            <div className="flex">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={(e) => setname(e.target.value)} value={name} className="border w-full p-2 mb-2" />
                                
                            </div>
                            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} className="border w-full p-2 mb-2" />
                            <input type="text" onChange={(e) => setposition(e.target.value)} value={position} className="border w-full p-2 mb-2" />
                            <div className="flex justify-between mt-4">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
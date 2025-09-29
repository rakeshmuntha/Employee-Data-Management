import axios from "axios";
import { useState } from "react";

export const EmployeeDetails = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const deleteEmp = async () => {
        await axios.delete(`http://localhost:3000/api/employee/${props.id}`)
        await props.getAllEmp();
    }

    const editEmp = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        await axios.put(`http://localhost:3000/api/employee/${props.id}`, {
            name, email, position
        })
        
        await props.getAllEmp();
        setIsOpen(false);
    }

    const [name, setname] = useState(props.name);
    const [email, setemail] = useState(props.email);
    const [position, setposition] = useState(props.position);
    
    return (
        <div className="flex gap-5">
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.email}</div>
            <div>{props.position}</div>

            <button type="button" onClick={() => setIsOpen(true)} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</button>
            <button type="button" onClick={deleteEmp} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">Edit Employee</h3>

                        <form onSubmit={(e) => editEmp(e)}>
                            <input type="text" onChange={(e) => setname(e.target.value)} value={name} className="border w-full p-2 mb-2" />
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
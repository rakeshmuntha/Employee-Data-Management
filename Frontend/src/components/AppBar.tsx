import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import type { employee } from "../types";

interface propEmp {
    data: employee[],// is the data of all employees
    getAllEmp: () => Promise<void>
}

export const AppBar = (props: propEmp) => {
    const [isOpen, setIsOpen] = useState(false);


    const addEmp = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setIsOpen(false);

        try {
            const promise = axios.post(`http://localhost:3000/api/employee`, {
                name, email, position
            })

            toast.promise(promise, {
                loading: 'Adding...',
                success: `Added Successfully`,
            });

            await promise;
            await props.getAllEmp();
        }

        catch (error: any) {
            toast.error(error.response.data.message);
        }
    }

    const [name, setname] = useState("rakk");
    const [email, setemail] = useState("rakk@gmail.com");
    const [position, setposition] = useState("CEO");

    return (
        <div className="flex justify-between shadow-md items-center p-3 mb-7">
            <div>Employees</div>

            <div className="flex gap-2 items-center justify-center">

                <form className="max-w-lg mx-auto m-1">
                    <div className="flex">

                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg focus:outline-none border-s-gray-200 border-s-2 border border-gray-300" placeholder="Search" required />
                            <button type="submit" className="absolute top-0 end-0 p-2 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <button type="button" onClick={() => setIsOpen(true)} className="text-white hover:text-white border bg-blue-700 hover:bg-blue-800 cursor-pointer focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Add Employee</button>
            </div>



            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
                    <div className="bg-white p-6 sm:p-10 flex flex-col gap-1 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-2xl">Add Employee</h3>

                        <form onSubmit={(e) => addEmp(e)}>

                            <label htmlFor="name" className="text-sm font-semibold">Emp Name</label>
                            <input type="text" name="name" onChange={(e) => setname(e.target.value)} value={name} className="border w-full rounded-lg p-2 mb-2" />

                            <label htmlFor="email" className="text-sm font-semibold">Emp Email</label>
                            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} className="border rounded-lg w-full p-2 mb-2" />

                            <label htmlFor="email" className="text-sm font-semibold">Emp Position</label>
                            <input type="text" onChange={(e) => setposition(e.target.value)} value={position} className="border rounded-lg w-full p-2 mb-2" />
                            <div className="flex justify-between mt-4">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded-lg  cursor-pointer">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg  cursor-pointer">
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
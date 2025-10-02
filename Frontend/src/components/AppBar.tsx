import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import type { employee } from "../types";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface propEmp {
    data: employee[];
    getAllEmp: () => Promise<void>;
    setSearchTerm: (term: string) => void;
}

export const AppBar = (props: propEmp) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const [name, setname] = useState("Rakk");
    const [email, setemail] = useState("rakk@gmail.com");
    const [position, setposition] = useState("ceo");

    const addEmp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsOpen(false);

        try {
            const promise = axios.post(`${backendUrl}/api/employee`, {
                name,
                email,
                position,
            });

            toast.promise(promise, {
                loading: "Adding...",
                success: "Added Successfully",
            });

            await promise;
            await props.getAllEmp();
        }
        catch (error: any) {
            const msg = error?.response?.data?.message ?? "Something went wrong";
            toast.error(msg);
        }
    };

    // call parent on each change
    const handleSearchChange = (val: string) => {
        setSearchInput(val);
        props.setSearchTerm(val);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between items-center shadow-md p-3 mb-7 gap-3">
            <div className="m-2 text-2xl">Employees</div>

            <div className="flex items-center gap-3">

                <form
                    className="flex"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.setSearchTerm(searchInput);
                    }}
                >
                    <div className="relative w-72">
                        <input
                            type="search"
                            value={searchInput}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
                            placeholder="Search by name"
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 h-full px-3 text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    </div>
                </form>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5"
                >
                    Add Employee
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
                    <div className="bg-white p-6 sm:p-8 flex flex-col gap-3 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-2xl">Add Employee</h3>

                        <form onSubmit={addEmp} className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">Emp Name</label>
                            <input type="text" onChange={(e) => setname(e.target.value)} value={name} className="border w-full rounded-lg p-2" required />

                            <label className="text-sm font-semibold">Emp Email</label>
                            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} className="border rounded-lg w-full p-2" required />

                            <label className="text-sm font-semibold">Emp Position</label>
                            <input type="text" onChange={(e) => setposition(e.target.value)} value={position} className="border rounded-lg w-full p-2" required />

                            <div className="flex justify-between mt-4">
                                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border cursor-pointer text-white bg-gray-600 hover:bg-gray-700  rounded-lg">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white cursor-pointer rounded-lg">
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
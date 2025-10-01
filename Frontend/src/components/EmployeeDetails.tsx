import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import type { employee } from "../types";

interface propEmp extends employee {
    getAllEmp: () => Promise<void>
}

export const EmployeeDetails = (props: propEmp) => {
    const [isOpen, setIsOpen] = useState(false);

    const deleteEmp = async () => {

        try {
            const promise = axios.delete(`http://localhost:3000/api/employee/${props.id}`);

            toast.promise(promise, {
                loading: 'Deleting...',
                success: `Deleted Successfully`,
            });

            await promise;
            await props.getAllEmp();
        }

        catch (error: any) {
            toast.error(error.message);
        }
    }

    const editEmp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsOpen(false);

        try {
            const promise = axios.put(`http://localhost:3000/api/employee/${props.id}`, {
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

    const [name, setname] = useState(props.name);
    const [email, setemail] = useState(props.email);
    const [position, setposition] = useState(props.position);

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 mb-4">
            <div className="border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6">
                <div className="hidden md:grid md:grid-cols-4 md:gap-6">
                    <div>
                        <div className="font-semibold text-gray-700 mb-2">ID</div>
                        <div className="text-gray-600">{props.id}</div>
                    </div>

                    <div>
                        <div className="font-semibold text-gray-700 mb-2">Name</div>
                        <div className="text-gray-600">{props.name}</div>
                    </div>

                    <div>
                        <div className="font-semibold text-gray-700 mb-2">Email</div>
                        <div className="text-gray-600 break-words">{props.email}</div>
                    </div>

                    <div>
                        <div className="font-semibold text-gray-700 mb-2">Position</div>
                        <div className="text-gray-600 mb-3">{props.position}</div>
                        <div className="flex gap-3">
                            <button
                                type="button" onClick={() => setIsOpen(true)} className="text-blue-700 hover:text-blue-800 focus:outline-none font-medium text-sm cursor-pointer"
                            >
                                Edit
                            </button>
                            <button
                                type="button" onClick={deleteEmp} className="text-red-600 hover:text-red-700 focus:outline-none font-medium text-sm cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:hidden space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="font-semibold text-gray-700 text-sm">ID</div>
                            <div className="text-gray-600">{props.id}</div>
                        </div>
                        <div className="flex gap-3">
                            <button
                                type="button" onClick={() => setIsOpen(true)} className="text-blue-700 hover:text-blue-800 focus:outline-none font-medium text-sm cursor-pointer"
                            >
                                Edit
                            </button>
                            <button
                                type="button" onClick={deleteEmp} className="text-red-600 hover:text-red-700 focus:outline-none font-medium text-sm cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="font-semibold text-gray-700 text-sm">Name</div>
                        <div className="text-gray-600">{props.name}</div>
                    </div>

                    <div>
                        <div className="font-semibold text-gray-700 text-sm">Email</div>
                        <div className="text-gray-600 break-all">{props.email}</div>
                    </div>

                    <div>
                        <div className="font-semibold text-gray-700 text-sm">Position</div>
                        <div className="text-gray-600">{props.position}</div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4">
                    <div className="bg-white p-6 sm:p-10 flex flex-col gap-1 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">Edit Employee</h3>

                        <form onSubmit={(e) => editEmp(e)}>
                            <label htmlFor="name" className="text-sm font-semibold">Emp Name</label>
                            <input
                                type="text" name="name" onChange={(e) => setname(e.target.value)} value={name} className="border w-full rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <label htmlFor="email" className="text-sm font-semibold">Emp Email</label>
                            <input
                                type="email" onChange={(e) => setemail(e.target.value)} value={email} className="border w-full rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <label htmlFor="position" className="text-sm font-semibold">Emp Position</label>
                            <input
                                type="text" onChange={(e) => setposition(e.target.value)} value={position} className="border w-full rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <div className="flex justify-between mt-4 gap-3">
                                <button
                                    type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50 flex-1 sm:flex-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit" className="px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-800 flex-1 sm:flex-none"
                                >
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
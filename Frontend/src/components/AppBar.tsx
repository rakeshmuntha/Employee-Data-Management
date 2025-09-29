import axios from "axios";
import { useRef, useState } from "react";
import 'flowbite'
export const AppBar = (props: any) => {

    const [name, setname] = useState("rakesh");
    const [email, setemail] = useState("rakk@gmail.com");
    const [position, setposition] = useState("rakk");

    const closeButton = useRef<any>(null);

    const addEmployee = async (e: any) => {
        e.preventDefault();

        closeButton.current.click();
        await axios.post('http://localhost:3000/api/employee', {
            name,
            email,
            position
        })
        await props.getAllEmp();
    }


    return (
        <div className='flex justify-around'>
            <h2>Employee Details</h2>

            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                + Add Employee
            </button>

            <div id="authentication-modal" aria-hidden="true" className="hidden overflow-y-auto backdrop-contrast-75 overflow-x-hidden fixed top-0 right-0 left-0 justify-center w-full md:inset-0 h-full max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">

                    <div className="relative bg-white rounded-lg shadow">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Add Employee
                            </h3>
                            <button ref={closeButton} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#" onSubmit={(e) => addEmployee(e)}>

                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                                    <input onChange={(e) => setname(e.target.value)} value={name} type="text" name="name" id="name" placeholder="Enter name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" onChange={(e) => setemail(e.target.value)} value={email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                                </div>

                                <div>
                                    <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Your position</label>
                                    <input type="text" onChange={(e) => setposition(e.target.value)} value={position} name="position" id="position" placeholder="Enter position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" required />
                                </div>

                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
import axios from 'axios'
import './App.css'
import { EmployeeDetails } from './components/EmployeeDetails'
import { useEffect, useState } from 'react';
import { AppBar } from './components/AppBar';
import { Toaster } from 'react-hot-toast'
import type { employee } from './types';
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
    const [data, setdata] = useState<employee[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getAllEmp = async () => {
        const res = await axios.get(`${backendUrl}/api/employees`);
        setdata(res.data.data);
    }


    useEffect(() => {
        getAllEmp();
        
        setInterval(() => {
            getAllEmp();
        }, 30000);
    }, [])


    const filteredData = data.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* pass callback for search */}
            <AppBar getAllEmp={getAllEmp} data={data} setSearchTerm={setSearchTerm} />
            <Toaster />

            {filteredData.map((emp) => (
                <div key={emp.id}>
                    <EmployeeDetails
                        name={emp.name}
                        id={emp.id}
                        email={emp.email}
                        position={emp.position}
                        getAllEmp={getAllEmp}
                    />
                </div>
            ))}
        </>
    )
}

export default App
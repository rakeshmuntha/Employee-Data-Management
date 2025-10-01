import axios from 'axios'
import './App.css'
import { EmployeeDetails } from './components/EmployeeDetails'
import { useEffect, useState } from 'react';
import { AppBar } from './components/AppBar';
import { Toaster } from 'react-hot-toast'
import type { employee } from './types';

function App() {

    const [data, setdata] = useState<employee[]>([]);
    const getAllEmp = async () => {
        const data = await axios.get('http://localhost:3000/api/employees');
        setdata(data.data.data);
    }

    useEffect(() => {
        getAllEmp();
    }, [])

    return (
        <>
            <AppBar getAllEmp={getAllEmp} data={data} />
            <Toaster />
            {data.map((emp: any) => {
                return <div key={emp.id}>
                    <EmployeeDetails name={emp.name} id={emp.id} email={emp.email} position={emp.position} getAllEmp={getAllEmp} />
                </div>
            })}
        </>
    )
}

export default App

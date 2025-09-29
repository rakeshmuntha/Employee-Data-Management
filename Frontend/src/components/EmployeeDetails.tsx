import axios from "axios"

export const EmployeeDetails = (props: any) => {

    const deleteEmp = async () => {
        await axios.delete(`http://localhost:3000/api/employee/${props.id}`)
        await props.getAllEmp();
    }

    return (
        <div className="flex gap-50">
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.email}</div>
            <div>{props.position}</div>

            <button className='border-2 cursor-pointer'>edit</button>
            <button className='border-2 cursor-pointer' onClick={deleteEmp}>delete</button>
        </div>
    )
}
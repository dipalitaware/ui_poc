import React,{use, useState} from "react";

    const EmployeeForm = () => {
        const [emp, setEmp] = useState([]);
        const [empForm, setEmpForm] = useState({ empId:'', empName:'', empAddress:'', empDepartment:'', empBloodGroup:'' });
        const [isEditing, setIsEditing] = useState(false);
        const [editIndex, setEditIndex] = useState(null);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setEmpForm((prev) =>({ ...prev, [name]:value }));
        };

        const saveData = (e) => {
            e.preventDefault();
            if(isEditing) {
                const updated = [...emp];
                updated[editIndex] = empForm;

                setEmp(updated);
                setIsEditing(false)
                setEditIndex(null);                
            } else {
                setEmp([...emp, empForm]);
            }
            setEmpForm({empId:'', empName:'',empAddress:'', empDepartment:'', empBloodGroup:''});
        };

        const handleEdit = (index) => {
            setEmpForm(emp[index]);
            setIsEditing(true);
            setEditIndex(index);
        };

        return(
                <>   
                  <h2 className="cust-title">Employee Form</h2>                                
                    <main>
						<form className="cust-data form-align" onSubmit={saveData}>
                            <label>Employee ID :
                                <input
                                    type="number"
                                    name="empId"
                                    placeholder="Enter Emp ID"
                                    value={empForm.empId}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Employee Name :
                                <input
                                    type="text"
                                    name="empName"
                                    placeholder="Enter Emp Name"
                                    value={empForm.empName}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Employee Address :
                                <input
                                    type="text"
                                    name="empAddress"
                                    placeholder="Enter Employee Address"
                                    value={empForm.empAddress}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Employee Department :
                                <input
                                    type="text"
                                    name="empDepartment"
                                    placeholder="Enter Emp Department"
                                    value={empForm.empDepartment}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Employee Blood Group :
                                <input
                                    type="text"
                                    name="empBloodGroup"
                                    placeholder="Enter Employee Blood Group"
                                    value={empForm.empBloodGroup}
                                    onChange={handleChange}
                                />
                            </label>

                            <button type="submit" className="cust-btn">
                                {isEditing ? 'Update' : 'Add'}
                            </button>
						</form>
				    </main> 
             
                <h2 className="cust-title">Employee Details</h2>  
                <table className="cust-data form-align">
                            <thead>
                                <tr>
                                    <th>Employee ID </th>
                                    <th>Employee Name </th> 
                                    <th>Employee Address </th>
                                    <th>Employee Department</th>
                                    <th>Employee Blood Group </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emp.map((e, index) =>(
                                    <tr key={index}>
                                        <td>{e.empId}</td>
                                        <td>{e.empName}</td>
                                        <td>{e.empAddress}</td>
                                        <td>{e.empDepartment}</td>
                                        <td>{e.empBloodGroup}</td>
                                        <td>
                                            <button
                                                onClick={() => handleEdit(index)}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                </table>
                <div class="cust-footer card-footer text-body-secondary">
                        Copyright @2025
                </div>
                </>
        )
   
}
export default EmployeeForm;

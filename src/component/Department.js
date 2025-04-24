import React, {useState} from "react";

    const DepartmentForm = () => {

        const [dept, setDept] = useState([]);
        const [deptForm, setDeptForm] = useState({deptId:'',deptName:''});
        const [isEditing, setIsEditing] = useState(false);
        const [editIndex, setEditIndex] = useState(null);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setDeptForm((prev) =>({ ...prev, [name]:value })); 
        };

        const saveData = (e) => {
            e.preventDefault();
            if(isEditing) {
                const updated = [...dept];
                updated[editIndex] = deptForm;
                setDept(updated);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                setDept([...dept, deptForm]);
            }
            setDeptForm({deptId:'', deptName:''});
        }

        const handleEdit = (index) => {
            setDeptForm(dept[index]);
            setIsEditing(true);
            setEditIndex(index);
        };
            
        return(
                <> 
                <h2 className="cust-title">Department Form</h2>                        
					<form className="cust-data form-align" onSubmit={saveData}>
							<label>Department ID :
                                <input
                                    type="number"
                                    name="deptId"
                                    placeholder="Enter Dept ID"
                                    value={deptForm.deptId}
                                    onChange={handleChange} required
                                />
                            </label>
                            
                            <label>Department Name :
                                <input
                                    type="text"
                                    name="deptName"
                                    placeholder="Enter Dept Name"
                                    value={deptForm.deptName}
                                    onChange={handleChange} required
                                />
                            </label><br/>
                            <button type="submit" className="cust-btn">
                                {isEditing ? 'Update' : 'Add Department'}
                            </button>
					</form>

                <h2 className="cust-title">Department Details</h2>                    
                <table className="cust-data form-align">
                            <thead>
                                <tr>
                                    <th>DepartmentID</th>
                                    <th>Department Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dept.map((d, index) =>(
                                    <tr>
                                        <td>{d.deptId}</td>
                                        <td>{d.deptName}</td>
                                        <td>
                                            <button onClick={() => handleEdit(index)}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                </table>
    
                <div class="cust-footer card-footer text-body-secondary cust-header">
                        Copyright @2025
                </div>
                </>
        )
   
}

export default DepartmentForm;
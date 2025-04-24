import React,{Component, use, useState} from "react";

    const AccountantForm = () => {

        const [accountant, setAccountant] = useState([]);
        const [accountantForm, setAccountantForm] = useState({accountantId:'', accountantName:''});
        const [isEditing, setIsEditing] = useState(false);
        const [editIndex, setEditIndex] = useState(null);

        const handleChange = (event) => {
            const {name, value} = event.target;
    
            setAccountantForm((prev)=>({...prev, [name]:value}));
         };

        const saveData = (event) => {
            event.preventDefault();
            if(isEditing) {
                const updated=[...accountant];
                updated[editIndex]=accountantForm;

                setAccountant(updated);
                setIsEditing(false);
                setEditIndex(null);
            } else {
                setAccountant([...accountant, accountantForm]);
            }
            setAccountantForm({accountantId:'', accountantName:''});
        };

        const handleEdit = (index) => {
            setAccountantForm(accountant[index]);
            setIsEditing(true);
            setEditIndex(index);
        };
   
        return(
                <>                
                <main>
                    <h2 className="cust-title">Accountant Form</h2>                        
						<form className="cust-data form-align" onSubmit={saveData}>
							<label>Accountant Id :
                                <input
                                    type="number"
                                    name="accountantId"
                                    placeholder="Accountant ID"
                                    value={accountantForm.accountantId}
                                    onChange={handleChange} required
                                />
                            </label>
                            <label>Accountant Title :
                                <input
                                    type="text"
                                    name="accountantName"
                                    placeholder="Accountant Name"
                                    value={accountantForm.accountantName}
                                    onChange={handleChange} required
                                />
                            </label>
                            <button type="submit" className="cust-btn">
                                { isEditing ? 'Update' : 'Add'}
                            </button>
						</form>
				</main> 

                <h2 className="cust-title">Accountant Details</h2>                        
                <table className="cust-data form-align">
                            <thead>
                                <tr>
                                    <th>Accountant ID</th>
                                    <th>Accountant Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accountant.map((a, index) =>(
                                    <tr key={index}>
                                        <td>{a.accountantId}</td>
                                        <td>{a.accountantName}</td>
                                        <td>
                                            <button onClick={() => handleEdit(index)}>Edit</button>
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

export default AccountantForm;
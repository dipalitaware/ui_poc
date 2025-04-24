import React, {useState} from "react";

const TimeSheetForm = () => {
    const [timesheet, setTimesheet] = useState([]);
    const [timeSheetForm, setTimesheetForm] = useState({ loginTime:'', breakTime:'', meetingTime:'', logoutTime:'', totalHours:'' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTimesheetForm ((prev) =>({...prev, [name]:value}));
    };

    const saveData = (e) => {
        e.preventDefault();
        if(isEditing) {
            const updated = [...timesheet];
            updated[editIndex] = timeSheetForm;

            setTimesheet(updated);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setTimesheet([...timesheet,timeSheetForm]);
        }
        setTimesheetForm({ loginTime:'', breakTime:'', meetingTime:'', logoutTime:'', totalHours:'' });
    }

    const handleEdit = (index) => {
        setTimesheetForm(timesheet[index]);
        setIsEditing(true);
        setEditIndex(index);

    };
   
        return(
                <>      
                    <main>
                    <h2 className="cust-title">TimeSheet Form</h2>  
						<form className="cust-data form-align" onSubmit={saveData}>
                            <label>Login Time:
                                <input
                                    type="number"
                                    name="loginTime"
                                    placeholder="Login Time"
                                    value={timeSheetForm.loginTime}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Break Time :
                                <input
                                    type="number"
                                    name="breakTime"
                                    placeholder="Break Time"
                                    value={timeSheetForm.breakTime}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Meeting Time :
                                <input
                                    type="number"
                                    name="meetingTime"
                                    placeholder="Meeting Time"
                                    value={timeSheetForm.meetingTime}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Logout Time :
                                <input
                                    type="number"
                                    name="logoutTime"
                                    placeholder="Logout Time"
                                    value={timeSheetForm.logoutTime}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>Total Hours :
                                <input
                                    type="number"
                                    name="totalHours"
                                    placeholder="Total Hours"
                                    value={timeSheetForm.totalHours}
                                    onChange={handleChange}
                                />
                            </label>

                            <button type="submit" className="cust-btn">
                                {isEditing ? 'Update' : 'Add'}
                            </button>
						</form>
				    </main> 
				
                <h2 className="cust-title">TimeSheet Details</h2>  
                <table className="cust-data form-align">
                            <thead>
                                <tr>
                                    <th>Login Time </th>
                                    <th>Break Time </th> 
                                    <th>Meeting Time </th>
                                    <th>Logout Time </th>
                                    <th>Total Hours</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timesheet.map((t, index) =>(
                                    <tr key={index}>
                                        <td>{t.loginTime}</td>
                                        <td>{t.breakTime}</td>
                                        <td>{t.meetingTime}</td>
                                        <td>{t.logoutTime}</td>
                                        <td>{t.totalHours}</td>
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

export default TimeSheetForm;
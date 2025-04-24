import React, { useState } from 'react';
import { data } from 'react-router-dom';

const CompanyForm = () => {
  const [company, setCompany] = useState([]);
  const [companyForm, setCompanyForm] = useState({ name:'', address:'' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveData = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated = [...company];
      updated[editIndex] = companyForm;
      setCompany(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setCompany([...company, companyForm]);
    }
    setCompanyForm({ name:'', address:'' });
  }

   const handleEdit = (index) => {
    setCompanyForm(company[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
      const deleteId = company.index;
      const object = company.find(({index}) => index === deleteId);

      if(object) {
        object.value.splice(0,1);
      }
  }


  return (
    <>
      <h2 className="cust-title">Company Registration Form</h2>
        <div>
            <form className="cust-data form-align" onSubmit={saveData}>
                <label>Company Name :
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Company Name"
                    value={companyForm.name}
                    onChange={handleChange} required
                />
                </label>
                
                <label>Company Address :
                <input
                    type="text"
                    name="address"
                    placeholder="Enter Company Address"
                    value={companyForm.address}
                    onChange={handleChange} required
                />
                </label>

                <button type="submit">
                {isEditing ? 'Update Company' : 'Add Company'}
                </button>
            </form>
        </div>

      <h2 className="cust-title">Company Registration Details</h2>
      {
        <table className="cust-data form-align">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Company address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {company.map((c, index) => (
              <tr key={index}>
                <td>{c.name}</td>
                <td>{c.address}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default CompanyForm;

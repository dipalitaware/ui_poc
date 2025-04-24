import React, { Component } from 'react';

class EditCompanyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyObj: [],
      company: {
        name: '',
        address: '',
      },
      isEditing: false,
      editIndex: null,
    };
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({				//Call back function
      company: {
        ...prevState.company,
        [name]: value
      }
    }));
  };

  handleAddCompany = () => {
    const { company, companyObj } = this.state;

    if (company.name && company.address) {
      this.setState({
        companyObj: [...companyObj, company],
        company: { name: '', address: '' }		//to make all fields empty once data is added on click
      });
    }
  };

  handleEditCompany = (index) => {
    this.setState({
      company: { ...this.state.companyObj[index] },
      isEditing: true,
      editIndex: null,
    });
  };

  handleUpdateCompany = () => {
    const { companyObj, company, editIndex } = this.state;

    if (company.name && company.address && editIndex !== null) {
      const updatedCompany = [...companyObj];
      updatedCompany[editIndex] = { ...company};

      this.setState({						//once data is edited make the form to previous state, i.e to make index to null 								//and to make isEditing flag to false
        companyObj: updatedCompany,
        company: { name: '', address: '' },
        isEditing: false,
        editIndex: null,
      });
    }
  };

  render() {
     const { company, companyObj, isEditing } = this.state;

    return (
      <div>
        <h2>Add/Edit Exmple</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={company.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Company Address"
            value={company.address}
            onChange={this.handleChange}
          />
          
          <button onClick={isEditing ? this.handleUpdateCompany : this.handleAddCompany}>
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
        <br></br><br></br>
        <h3>Company Data</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              companyObj.map((c, index) => (
                <tr key={index}>
                  <td>{c.name}</td>
                  <td>{c.address}</td>
                  <td>
                    <button onClick={() => this.handleEditCompany(index)}>Edit</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default EditCompanyData;
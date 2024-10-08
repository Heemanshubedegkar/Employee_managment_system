import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
import { Link, Navigate } from 'react-router-dom';


 class ListEmployeeComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state =
       {
          employees: []
       }

       this.addEmployee = this.addEmployee.bind(this);



    }

    deleteEmployee(id)
    {
        EmployeeService.deleteEmployeeById(id).then(res =>
            {
                this.setState({employees:this.state.employees.filter(employee => employee.id != id)})
            }
        )
    }

    editEmployee(id)
    {
        Navigate("/update-employee/${id}")
    }
    componentDidMount() 
    {
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        })
    }

    addEmployee()
    {
        Navigate('/add-employee/_add')
    }
  render() {
    return (
      <div>
        <h2 className="text-center"> Employee List</h2>
        <Link to="/add-employee/_add" className="btn btn-primary  mb-3" style={{marginbottom:'5px'}}>Add Employee</Link>
        <div className="row">
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Employee first name</th>
                        <th> Employee last name</th>
                        <th> Employee Email Id</th>
                        <th> Actions</th>
                    </tr>


                    
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee => 
                                <tr key = {employee.id}>
                                     <td>{employee.firstName}</td> 
           
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                    <Link to={`/add-employee/${employee.id}`} className="btn btn-info">Update</Link>

                                    <button  className='btn btn-danger' style ={{marginLeft:"10px"}} onClick={() => this.deleteEmployee(employee.id)}> delete</button>
                                  <Link style ={{marginLeft:"10px"}}to={`/view-employee/${employee.id}`}className="btn btn-info" >View</Link>
                                     </td>


                                </tr>
                        )
                    }
                </tbody>

            </table>
        </div>

      </div>
    )
  }
}

export default (ListEmployeeComponent);

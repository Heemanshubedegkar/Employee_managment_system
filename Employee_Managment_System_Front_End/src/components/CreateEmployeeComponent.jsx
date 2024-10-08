import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const CreateEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {
        if (id === '_add') {
            return;
        } else {
            
            EmployeeService.getEmployeeById(id).then((res) => {
                let employee = res.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmailId(employee.emailId);
            });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName, lastName, emailId };
        console.log('employee => ' + JSON.stringify(employee));

        if (id === '_add') {
            EmployeeService.createEmployees(employee).then(() => {
                navigate('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, id).then(() => {
                navigate('/employees');
            });
        }
    };

        const  getByTitle =() =>
    {
        if(id === '_add')
            {
                return <h3 className='text-center'>ADD Employee</h3>
            }
            else{
                return <h3 className='text-center'>Update Employee</h3>

            }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                   
                   {
                     getByTitle()
                   }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>EmailId:</label>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
                                    Save
                                </button>
                                <Link className="btn btn-danger" to="/employees" style={{ marginLeft: '10px' }}>
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;

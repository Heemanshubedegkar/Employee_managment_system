import React, { useState, useEffect } from 'react';
import EmployeeService from '../service/EmployeeService';
import { useParams } from 'react-router-dom';

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  return (
    <div style={{marginTop:"110px"}}>
      <div className='card col-md-6 offset-md-3'>
        <h3 className='text-center'>View Employee Details</h3>
        <div className='card-body'>
        <div className='row'>
            <div className='col-md-4'><label>Employee First Name: </label></div>
            <div className='col-md-4'>{employee.firstName}</div>
          </div>
          <div className='row'>
            <div className='col-md-4'><label>Employee Last Name: </label></div>
            <div className='col-md-8'>{employee.lastName}</div>
          </div>
          <div className='row'>
            <div className='col-md-4'><label>Employee Email Id: </label></div>
            <div className='col-md-8'>{employee.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;

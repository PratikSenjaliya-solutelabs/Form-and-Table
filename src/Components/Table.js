import React from 'react';
import './Table.module.css';


const Table = (props) => {
    const tableData = 
        <div style={{overflowx: "auto"}}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>DateOfBirth</th>
                        <th>Address</th>
                        <th>PlaceOfBirth</th>
                        <th>PhoneNumber</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {props.enteredData.map((data, index) => {
                    return(
                        <tbody>
                            <tr key={index}>
                                <td>{data.firstName} {data.lastName}</td>
                                <td>{data.birthDate}</td>
                                <td>{data.addressLine1}, {data.addressLine2}</td>
                                <td>{data.placeOfBirth}</td>
                                <td>{data.phoneNumber}</td>
                                <td><button className="editButton" onClick={() => props.onEdit(index, data.id)}>Edit</button></td>
                                <td><button className="deleteButton" onClick={() => props.onDelete(data.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>

    return(
        <div className="div"> 
            <h1>Table</h1>  
            {tableData}
        </div>
    );
}

export default Table;

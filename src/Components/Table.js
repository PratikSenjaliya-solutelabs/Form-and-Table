import React from 'react';
import classes from './Table.module.css';

const Table=(props)=>{
    let formData=[props.tableData]
    formData.push(props.tableData);
    console.log(formData);


    return (
        <div className={classes.table}>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Adress</th>
                    <th>Place of Birth</th>
                    <th>Phone No</th>
                    <th>Edit </th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    formData.map(person => (
                            <tr>
                                <td>{person.firstname} {person.lastname}</td>
                                <td>{person.birthdate}</td>
                                <td>{person.adressline1},{person.adressline2}</td>
                                <td>{person.placeofbirth}</td>
                                <td>{person.phoneno}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}

export default Table;

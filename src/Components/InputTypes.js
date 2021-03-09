import React from 'react';
import './InputTypes.module.css';
import classes from './InputTypes.module.css';

const InputTypes = (props) =>{
    return(

        <div className="maindiv">   
            <form onSubmit={props.submit} style={{display: "flex", flexDirection: "column",border:"border: 5px solid gray;"}}>
                <h1>Form</h1>
                <label  htmlFor="firstName">First Name</label>
                <div >
                    <input  
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={props.values.firstName}
                        onChange={props.onChange}
                        onBlur={props.onBlur}  
                    />
                    {props.error.firstName && props.touched.firstName ? <p>{props.error.firstName}</p> : null}
                </div>
                
            
                <label htmlFor="lastName">Last Name</label> 
                <div >
                    <input  
                        type='text' 
                        id='lastName' 
                        name='lastName'
                        value={props.values.lastName}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    />
                    {props.error.lastName && props.touched.lastName ? <p>{props.error.lastName}</p> : null}
                </div>

                <label  htmlFor="birthDate">Birth Date</label>
                <div >
                    <input 
                        type='date' 
                        id='birthDate' 
                        name='birthDate'
                        value={props.values.birthDate}
                        onChange={props.onChange}
                        onBlur={props.onBlur} 
                    />
                    {props.error.birthDate && props.touched.birthDate ? <p>{props.error.birthDate}</p> : null}
                </div>

                <label >Address</label>
                <div >
                    <label htmlFor='addressline1'>Address Line 1</label>
                    <input 
                        type='text' 
                        id='addressLine1' 
                        name='addressLine1'
                        value={props.values.addressLine1}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    /><br/>

                    <label  htmlFor='addressline2'>Address Line 2</label>
                    <input
                        type='text'
                        id='addressLine2' 
                        name='addressLine2'
                        value={props.values.addressLine2}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    />
                </div>
                {(props.error.addressLine2 && props.touched.addressLine2) || (props.error.addressLine1 && props.touched.addressLine1) 
                    ? <p className="addresserror">{props.error.addressLine1}</p> 
                    : null
                }
                

                <label  htmlFor="placeOfBirth">Place Of Birth</label>
                <div className='input-div'>
                    <input 
                        type='text' 
                        id='placeOfBirth' 
                        name='placeOfBirth'
                        value={props.values.placeOfBirth}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                    />
                    {props.error.placeOfBirth && props.touched.placeOfBirth ? <p>{props.error.placeOfBirth}</p> : null}
                </div>
            
                <label  htmlFor="phoneNumber">Phone Number</label>
                <div >
                    <input
                        type='number' 
                        id ='phoneNumber' 
                        name='phoneNumber'
                        value={props.values.phoneNumber}
                        onChange={props.onChange}
                        onBlur={props.onBlur} 
                    />
                    {props.error.phoneNumber && props.touched.phoneNumber ? <p>{props.error.phoneNumber}</p> : null}
                </div>
                
                <button className={classes.button} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default InputTypes
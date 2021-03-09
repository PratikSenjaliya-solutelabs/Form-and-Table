import React from 'react';
import { useFormik } from 'formik';
import Validation from './validation';


import InputTypes from './InputTypes'

const Form = (props) => {
    
    let initialValues = null

    if(props.edit != null) {
        initialValues = {
            firstName: props.edit.firstName,
            lastName: props.edit.lastName,
            birthDate: props.edit.birthDate,
            addressLine1: props.edit.addressLine1,
            addressLine2: props.edit.addressLine2,
            placeOfBirth: props.edit.placeOfBirth,
            phoneNumber: props.edit.phoneNumber
        }
    } else {
        initialValues = {
            firstName:'',
            lastName:'',
            birthDate: '',
            addressLine1: '',
            addressLine2:'',
            placeOfBirth:'',
            phoneNumber: ''
        }
    }
    
    const formData = useFormik({
        
        initialValues: initialValues,

        validationSchema: Validation,
        
        onSubmit: (values, {resetForm}) => (
            // eslint-disable-next-line no-sequences
            props.addData(values), // add data to the table
            resetForm() // To reset the form after submitting
            // props.clearEdit() Clear the form afer clicking on Edit and then again after submitting it
        ),
        enableReinitialize: true // resets form only if initialValues are changed
    })

    return(
        <div >
            <InputTypes 
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                values={formData.values}
                error={formData.errors}
                touched = {formData.touched}
                submit={formData.handleSubmit}
            />
        </div>
    )
}

export default Form;
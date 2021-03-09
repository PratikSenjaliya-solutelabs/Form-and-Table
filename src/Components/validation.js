import * as Yup from 'yup';


const Validation = Yup.object({
        firstName: Yup.string()
            .min(2,'First Name is too short. Please enter at least 2 characters.')
            .required('First Name is required.'),
        lastName: Yup.string()
            .min(2,'Last Name is too short. Please enter at least 2 characters.')
            .required('Last Name is required.'),
        birthDate: Yup.date()
            .required('Birth Date is Required')
            .test('age', 'Age should be above 18',
                (val) => { return new Date(Date.now() - new Date(val).getTime()).getFullYear() - 1970 > 18 }),
        addressLine1:  Yup.string()
            .min(5,'Address is too short. Please enter at least 5 characters.')
            .required('Address is required.'),
        addressLine2: Yup.string()
            .min(5,'Address is too short. Please enter at least 5 characters.')
            .required('Address is required.'),
        placeOfBirth: Yup.string()
            .min(2,'Name of Place is too short. Please enter at least 2 characters.')
            .required('Place Of Birth is required.'),
        phoneNumber: Yup.number()
            .required('Phone Number is Required.')
            .test('len', 'Phone Number is either too short or too long. Please Enter exactly 10 digits', 
                (val) => { if(val) return val.toString().length === 10 }),
    })

export default Validation;
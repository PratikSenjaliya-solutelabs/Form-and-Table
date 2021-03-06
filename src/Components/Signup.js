  import React,{useState} from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from "yup";
 import classes from './Signup.module.css';
 import Table from './Table';
 
 const SignupSchema = Yup.object().shape({
   firstname: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
     lastname: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
     adressline1: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
     adressline2: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
     placeofbirth: Yup.string()
     .min(2, 'Too Short!')
     .max(70, 'Too Long!')
     .required('Required'),
     phoneno: Yup.number()
     .min(2, 'Too Short!')
     .required('Required'),
 });
 const Signup = () => {

  const [personState, setpersonState] = useState(
    {
        firstname: '',
         lastname: '',
         birthdate:'',
         adressline1:'',
         adressline2:'',
         placeofbirth:'',
         phoneno:''
    }
  );

 return(
   <div className={classes.container}>
     <div className={classes.float_child}>
       <Table tableData={personState}/>
     </div>
     <div className={classes.float_child}>
      <h1>Signup</h1>
     <Formik
       initialValues={{
         firstname: '',
         lastname: '',
         birthdate:'',
         adressline1:'',
         adressline2:'',
         placeofbirth:'',
         phoneno:''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         setpersonState({
           ...values
         });
       }}
     >
       {({ errors, touched }) => (
         <Form style={{display: "flex", flexDirection: "column"}}>
           <div > 
            <label htmlFor="firstname">First Name</label>
            <Field  name="firstname" placeholder="First Name" className={classes.input}/>
            <ErrorMessage name="firstname" 
            component="div"
            style={{ color: "red", fontWeight: "bold"}}/>
           </div>
          <div >
            <label htmlFor="lastname">Last Name</label>
            <Field name="lastname" className={classes.input}/>
            <ErrorMessage name="lastname" 
            component="div"
            style={{ color: "red", fontWeight: "bold"}}/>
          </div>
          <div >
            <label htmlFor="birthdate">Date Of Birth</label>
            <Field name="birthdate" type="date" className={classes.input}/>
          </div>
          <div >
            <label htmlFor="adressline1">AdressLine 1</label>
            <Field name="adressline1" className={classes.input}/>
            <ErrorMessage name="adressline1"
            component="div"
            style={{ color: "red", fontWeight: "bold"}} />
          </div>
          <div >
            <label htmlFor="adressline2">AdressLine 2</label>
            <Field name="adressline2" className={classes.input} />
            <ErrorMessage name="lastname"
            component="div"
            style={{ color: "red", fontWeight: "bold"}} />
          </div>
          <div >
            <label htmlFor="placeofbirth">Place Of Birth</label>
            <Field name="placeofbirth" className={classes.input} />
            <ErrorMessage name="placeofbirth"
            component="div"
            style={{ color: "red", fontWeight: "bold"}} />
          </div>
          <div >
            <label htmlFor="phoneno">Phone No</label>
            <Field name="phoneno" className={classes.input} />
            <ErrorMessage name="phoneno"
            component="div"
            style={{ color: "red", fontWeight: "bold"}} />
          </div>

          <button type="submit" className={classes.button}>Submit</button>
          <button type="reset" className={classes.button}>Reset</button>
         </Form>
       )}
     </Formik>
     </div>
   </div>
 );
}
 export default Signup;
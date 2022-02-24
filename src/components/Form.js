import React from "react";
import { useFormik } from "formik";
const initialValues = {
    name:"",
    email:"",
    channel:"",
}
const onSubmit = values =>{
    console.log("formdata:", values)
}

const validate = (values) => {
    //values.name values.email values.channel
    //errors.name errors.email, errors.channel
    //   errors.name="This field is required"
    let errors = {};

    if (!values.name) {
      errors.name = "required";
    }

    if (!values.email) {
      errors.email = "required";
    }
    //email format must be verified against a regex 
    else if (!/^[A-Z0-9._%+_]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email="invalid email format"
    }

    if (!values.channel) {
      errors.channel = "required";
    }
    return errors;
  },
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate
// })
const Form = () => {
    
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            //the onchange and value props help to track changes in state in the fields
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email Address: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            //the onchange and value props help to track changes in state in the fields
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="channel">URL Channel: </label>
          <input
            type="text"
            name="channel"
            id="channel"
            placeholder="channel"
            //the onchange and value props help to track changes in state in the fields
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;

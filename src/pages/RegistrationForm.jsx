import React from "react";
import './RegistrationForm.css';
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; 

function RegistrationForm() {
  const navigate = useNavigate();  

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    role: Yup.string().required("Role is required"),
    gender: Yup.string().required("Gender is required"),
  });

  return (
    <div>
      <div className="form-container">
        <h2>Registration Form</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "",
            gender: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              
              alert(JSON.stringify(values, null, 2));

         
              navigate("/login"); 

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="name" component="div" className="error" />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" component="div" className="error" />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name="password" component="div" className="error" />

              <label htmlFor="role">Select Role</label>
              <select
                id="role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">-- Select your role --</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
              <ErrorMessage name="role" component="div" className="error" />

              <div className="radio-group">
                <label>Gender:</label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={values.gender === "male"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={values.gender === "female"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />{" "}
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;

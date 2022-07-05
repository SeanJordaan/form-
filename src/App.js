import React from 'react';
import './index.css';
import { useState } from 'react';

export default function App() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success You Are Done</div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          class="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span>Please Enter First Name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          class="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span>Please Enter Last Name</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          class="form-field"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please Enter Email</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

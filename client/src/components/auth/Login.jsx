import React from "react";
import { useForm } from "react-hook-form"; // library for frontend validation

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const loginHandler = async (formData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch("http://localhost:5050/user/login", options);
    const data = await res.json();
    console.log("response....", data);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            },
          })}
        />
        {errors.email && <small>* Invalid email address </small>}

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          ref={register({
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-zA-Z]).{5,}$/,
            },
          })}
        />
        {errors.password && (
          <small>* Minimum 5 alpha numberic charecters </small>
        )}

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

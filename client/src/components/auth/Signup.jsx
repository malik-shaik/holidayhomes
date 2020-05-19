import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const signupHandler = async (formData) => {
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch("http://localhost:5050/user/register", options);
    const data = await res.json();
    console.log("response....", data);
  };

  return (
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit(signupHandler)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: "* Name must be minimum 2 charecters",
            minLength: 3,
            pattern: { value: /^[a-zA-Z\s]+$/ },
          })}
        />
        {errors.name && (
          <small className="err-msg">{errors.name.message}</small>
        )}

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

        <button>Signup</button>
      </form>
    </div>
  );
};
export default Signup;

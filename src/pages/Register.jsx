import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">This is Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your full name"
            />
          </div>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
            />
          </div>
          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="Phone"> Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your phone Number"
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

import React from "react";
import "./form.css";

function Form() {
  return (
    <form>
      <input type="email" className="input-box" placeholder="Your Email" />
      <input
        type="password"
        className="input-box"
        placeholder="Your Password"
      />
      <input type="number" className="input-box" placeholder="Your Age" />
      <input type="tel" className="input-box" placeholder="Your Phonenumber" />
      <input
        type="text"
        className="input-box"
        placeholder="Your Aadhar Number"
      />

      <p className="condition">
        <span>
          <input type="checkbox" />
        </span>
        I agree to the terms and conditions
      </p>
      <button type="button" className="sign-up-btn">
        Sign up
      </button>

      <p className="or">OR</p>
      <button type="button" className="citizen-btn">
        Login as Citizen
      </button>
      <p className="question">
        Do you have an account?<a href="#">Sign in</a>
      </p>
    </form>
  );
}

export default Form;

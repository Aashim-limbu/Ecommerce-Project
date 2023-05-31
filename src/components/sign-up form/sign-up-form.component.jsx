import { useState } from "react";
import "./sign-up.styles.scss";
import Button from "../Buttons/button.component";
import FormInput from "../form-input/form-input.component";
import {
  createUserSignInWithEmailNPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
export default function SignupForm() {
  const [Value, setValue] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = Value;
  async function handleSubmit(e) {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert("Password don't matches");
      return;
    }
    try {
      const { user } = await createUserSignInWithEmailNPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setValue({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Can't create user as Email already in use");
        return;
      }
      console.log("error with sign up with email and password ==>", error.code);
    }
  }
  function handleChange({ name, value }) {
    setValue({ ...Value, [name]: value });
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an Account ?</h2>
      <span>Sign Up With Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={(e) => {
            handleChange(e.target);
          }}
          value={displayName}
          name="displayName"
          required
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            handleChange(e.target);
          }}
          name="email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            handleChange(e.target);
          }}
          name="password"
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={(e) => {
            handleChange(e.target);
          }}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

import FormInput from "../form-input/form-input.component";
import Button , {BUTTON_TYPE} from "../Buttons/button.component";
import "./sign-in-form.style.scss";
import { useState } from "react";
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
export default function SignInForm() {
  const [Value, setValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = Value;
  function handleChange({ name, value }) {
    setValue({ ...Value, [name]: value });
  }
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      setValue({
        email: "",
        password: "",
      });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          setValue({ ...Value, password: "" });
          break;
        case "auth/user-not-found":
          alert("User not found");
          setValue({ ...Value, email: "", password: "" });
          break;
        default:
          console.error("Error While Signing In", e);
          break;
      }
    }
  }
  return (
    <div className="sign-in-container">
      <h2>Already Have An Account ?</h2>
      <span>Sign In With Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          required
          onChange={(e) => {
            handleChange(e.target);
          }}
        />
        <FormInput
          type="password"
          required
          label="Password"
          onChange={(e) => {
            handleChange(e.target);
          }}
          value={password}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE.secondary}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGNIN
          </Button>
        </div>
      </form>
    </div>
  );
}

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/sign-up form/sign-up-form.component";
import Button from "../../components/Buttons/button.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser}>Sign in with Google Popup</Button>
      <SignupForm />
    </div>
  );
};

export default SignIn;

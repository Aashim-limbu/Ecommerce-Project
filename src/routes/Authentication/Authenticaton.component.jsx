import SignupForm from "../../components/sign-up form/sign-up-form.component";
import SignInForm from "../../components/signin-form/sign-in-form.component";
import './Authentication.style.scss'
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignupForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;

import Header from "../components/Header";
import SignUpComponent from "../components/SignUp";

export default function SignUpPage() {
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <SignUpComponent />
    </>
  );
}

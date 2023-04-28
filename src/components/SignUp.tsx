import { useState } from "react";
import { signUpFields as fields } from "../constants/formFields";

import Input from "./Input";
import FormAction from "./FormAction";

let fieldsState: Record<string, string> = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUpComponent() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e: any) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    registerUser();
  };

  const registerUser = () => {};

  return (
    <form className="mt-8 space-y-6">
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit} text="Sign Up" />
    </form>
  );
}

import React from "react";
import { Form, Field, FormRenderProps } from "react-final-form";
import * as Yup from "yup";

interface FormInterface {
  firstName: String;
  lastName: String;
  gender: String;

  birthDate: Date;
  age: Number;

  race: String;
  nation: String;
  citizenID: Number;

  eMail: String;
  phoneNumber: String;
  address: String;

  preSchool: String;
  GPA: Number;

  faculty: String;
  class: String;
}

function registeringForm() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
  });

  const validation = (values: FormInterface) => {
    try {
      return schema.validateSync(values);
    } catch (e: any) {
      return e.errors && e.errors[0];
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validation}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <p>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
          </p>

          <p>
            <label>Last Name</label>
            <Field name="lastName" component="input" placeholder="Last Name" />
          </p>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}

export default registeringForm

import { useState } from "react";
import { Form, Field, FormRenderProps } from "react-final-form";
import * as Yup from "yup";

import { IBM_Plex_Sans_Thai } from "next/font/google";

const IBM = IBM_Plex_Sans_Thai({
  weight: "300",
  subsets: ["latin", "thai"],
});

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
  const submitHandle = (values: FormInterface) => {
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
    <Form onSubmit={submitHandle} validate={validation}>
      {({ handleSubmit, submission }) => (
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <Field name="firstName">
            {({ input }) => (
              <input
                className={
                  IBM.className + " p-1 border-[#2e2f2f] border-b-[1px]"
                }
                {...input}
                placeholder="First Name"
              />
            )}
          </Field>
          <br />

          <label>Last Name</label>
          <Field name="lastName">
            {({ input }) => (
              <input
                className={
                  IBM.className + " p-1 border-[#2e2f2f] border-b-[1px]"
                }
                {...input}
                placeholder="Last Name"
              />
            )}
          </Field>
          <br />

          <button
            disabled={submission}
            type="submit"
            className="submit transition p-[.75rem] my-4 bg-[#45b8ac] text-[whitesmoke] rounded-[1rem] hover:opacity-60"
          >
            Submit
          </button>
        </form>
      )}
    </Form>
  );
}

export default registeringForm;

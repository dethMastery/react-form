import { useState } from "react";
import { Form, Field, FormRenderProps } from "react-final-form";
import { ValidationErrors } from "final-form";
import * as Yup from "yup";

import { IBM_Plex_Sans_Thai } from "next/font/google";

const IBM = IBM_Plex_Sans_Thai({
  weight: "300",
  subsets: ["latin", "thai"],
});

interface FormInterface {
  firstName?: string;
  lastName?: string;
  gender?: string;

  birthDate?: Date;
  age?: number;

  race?: string;
  nation?: string;
  citizenID?: number;

  email?: string;
  phoneNumber?: string;
  address?: string;

  preSchool?: string;
  GPA?: number;

  faculty?: string;
  class?: string;
}

const submitHandle = (values: FormInterface) => {
  console.log(values);
};

const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

const validation = async (values: FormInterface): Promise<ValidationErrors> => {
  try {
    await schema.validate(values, { abortEarly: false });
  } catch (err: any) {
    return err.inner.reduce(
      (errors: ValidationErrors, innerError: Yup.ValidationError) => {
        if (innerError.path !== undefined) {
          return { ...errors, [innerError.path]: innerError.message };
        }
      },
      {}
    );
  }
};

function registeringForm() {
  return (
    <Form
      onSubmit={submitHandle}
      validate={validation}
      render={({ handleSubmit, submission }) => (
        <form onSubmit={handleSubmit}>
          <div className="inputContainer my-[.5rem]">
            <label>First Name</label>
            <Field name="firstName">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " p-1 border-[#2e2f2f] border-b-[1px] outline-0"
                  }
                  {...input}
                  placeholder="First Name"
                />
              )}
            </Field>
          </div>

          <div className="inputContainer my-[.5rem]">
            <label>Last Name</label>
            <Field name="lastName">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " p-1 border-[#2e2f2f] border-b-[1px] outline-0"
                  }
                  {...input}
                  placeholder="Last Name"
                />
              )}
            </Field>
          </div>

          <div className="optionContainer my-[.5rem]">
            <label>Gender</label>
            <Field name="gender">
              {({ input }) => (
                <select
                  className={
                    IBM.className +
                    " p-1 border-[#2e2f2f] border-b-[1px] outline-0 text-center"
                  }
                  {...input}
                >
                  <option> - </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              )}
            </Field>
            <br />
          </div>

          <button
            disabled={submission}
            type="submit"
            className="submit transition p-[.75rem] my-4 bg-[#45b8ac] text-[whitesmoke] rounded-[1rem] hover:opacity-60"
          >
            Submit
          </button>
        </form>
      )}
    />
  );
}

export default registeringForm;

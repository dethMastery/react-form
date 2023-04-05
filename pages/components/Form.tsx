import { Form, Field } from "react-final-form";
import { ValidationErrors } from "final-form";
import * as Yup from "yup";

import { IBM_Plex_Sans_Thai } from "next/font/google";

import { schema } from "./formSchema";

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

  citizenID?: number;

  email?: string;
  phoneNumber?: string;
  address?: string;

  preSchool?: string;
  faculty?: string;
  class?: string;

  GPA?: number;
}

const submitHandle = (values: FormInterface) => {
  console.log(values);
};

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
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          {/* First name */}
          <div className="inputContainer my-[.5rem]">
            <label>First Name</label> <br />
            <Field name="firstName">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="First Name"
                  type="text"
                />
              )}
            </Field>
          </div>

          {/* Last name */}
          <div className="inputContainer my-[.5rem]">
            <label>Last Name</label> <br />
            <Field name="lastName">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Last Name"
                  type="text"
                />
              )}
            </Field>
          </div>

          {/* Gender */}
          <div className="optionContainer my-[.5rem]">
            <label>Gender</label> <br />
            <Field name="gender">
              {({ input }) => (
                <select
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
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

          {/* Birthday */}
          <div className="inputContainer my-[.5rem]">
            <label>Birth date</label> <br />
            <Field name="birthDate">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Birth date"
                  type="date"
                />
              )}
            </Field>
          </div>

          {/* Age */}
          <div className="inputContainer my-[.5rem]">
            <label>Age</label> <br />
            <Field name="age">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Age"
                  type="number"
                />
              )}
            </Field>
          </div>

          {/* CitizenID */}
          <div className="inputContainer my-[.5rem]">
            <label>Citizen ID</label> <br />
            <Field name="citizenID">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="CitizenID"
                  type="text"
                />
              )}
            </Field>
          </div>

          {/* E-Mail */}
          <div className="inputContainer my-[.5rem]">
            <label>E-Mail</label> <br />
            <Field name="email">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="E-Mail"
                  type="email"
                />
              )}
            </Field>
          </div>

          {/* Telephone number */}
          <div className="inputContainer my-[.5rem]">
            <label>Telephone Number</label> <br />
            <Field name="phoneNumber">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Phone Number"
                />
              )}
            </Field>
          </div>

          {/* Address */}
          <div className="inputContainer my-[.5rem]">
            <label>Address</label> <br />
            <Field name="address">
              {({ input }) => (
                <textarea
                  id="address"
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Address"
                />
              )}
            </Field>
          </div>

          {/* Pre school */}
          <div className="inputContainer my-[.5rem]">
            <label>Pre-school</label> <br />
            <Field name="preSchool">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Pre-school"
                />
              )}
            </Field>
          </div>

          {/* Faculty */}
          <div className="inputContainer my-[.5rem]">
            <label>Faculty</label> <br />
            <Field name="faculty">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Faculty"
                />
              )}
            </Field>
          </div>

          {/* Class */}
          <div className="inputContainer my-[.5rem]">
            <label>Class</label> <br />
            <Field name="class">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="Class"
                />
              )}
            </Field>
          </div>

          {/* GPA */}
          <div className="inputContainer my-[.5rem]">
            <label>GPA</label> <br />
            <Field name="gpa">
              {({ input }) => (
                <input
                  className={
                    IBM.className +
                    " transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]"
                  }
                  {...input}
                  placeholder="GPA"
                />
              )}
            </Field>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="submit transition-all duration-300 p-[.75rem] my-4 bg-[#45b8ac] text-[whitesmoke] rounded-[1rem] hover:opacity-60"
          >
            Submit
          </button>
        </form>
      )}
    />
  );
}

export default registeringForm;

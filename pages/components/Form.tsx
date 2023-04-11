import { Form, Field } from "react-final-form";
import {FormInterface, submitHandle, validation} from './Form.function'

const inputStyle = 'transition-all duration-300 p-1 border-[transparent] border-b-[#2e2f2f] border-[1px] outline-0 w-[80%] text-center bg-[whitesmoke] focus:border-[#ff6f61] focus:border-[1px] focus:rounded-[1rem]'

function registeringForm() {
  return (
    <Form<FormInterface>
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
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
                    inputStyle
                  }
                  {...input}
                  placeholder="Class"
                />
              )}
            </Field>
          </div>

          {/* gpa */}
          <div className="inputContainer my-[.5rem]">
            <label>gpa</label> <br />
            <Field name="gpa">
              {({ input }) => (
                <input
                  className={
                    inputStyle
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

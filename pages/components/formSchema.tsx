import * as Yup from "yup";

export const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  gender: Yup.string().required("Gender is required."),
  age: Yup.number().positive().integer().required("Age is required."),

  birthDate: Yup.date().required("Birthday is required."),
  citizenID: Yup.string().min(13).max(13).required("Citizen ID is required."),

  email: Yup.string().email().required('E-Mail is Required'),
  phoneNumber: Yup.string().min(10).max(10).required("Phone number is required."),
  address: Yup.string().required("Address is required."),

  preSchool: Yup.string().required('Pre-school is required.'),
  faculty: Yup.string().required('Faculty is required.'),
  class: Yup.string().required('Class is required.'),

  gpa: Yup.number().required('GPA is required')
});
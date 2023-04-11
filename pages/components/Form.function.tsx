import { ValidationErrors } from "final-form";
import { schema } from "./formSchema";
import * as Yup from "yup";

export interface FormInterface {
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

  gpa?: number;
}

export const submitHandle = (values: FormInterface) => {
  console.log(values);
};

export const validation = async (values: FormInterface): Promise<ValidationErrors> => {
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
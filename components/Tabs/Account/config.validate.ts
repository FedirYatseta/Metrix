import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last Name is required"),
    phone: Yup.string().matches(
      /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
      "Invalid phone number format",
    ),
  });
import * as yup from "yup";

export const FormSchema = yup.object({
  username: yup.string().min(4).label("Username").required(),
  password: yup.string().min(8).label("Password").required(),
  email: yup.string().email().label("Email").required(),
});

export const LoginFormSchema = yup.object({
  username: yup.string().min(4).label("Username").required(),
  password: yup.string().min(1).label("Password").required(),
});
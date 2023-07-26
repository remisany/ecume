import * as yup from "yup";

//import constants
import validation from "../constants/validationConstant";

export type LoginFormData = yup.InferType<typeof validation.login>

export type SignupFormData = yup.InferType<typeof validation.signup>

export type PasswordFormData = yup.InferType<typeof validation.password>




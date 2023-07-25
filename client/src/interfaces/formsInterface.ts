import {DefaultValues} from "react-hook-form";
import * as yup from "yup";

//import constants
import validation from "../constants/validationConstant";

export const loginDefaultValues: DefaultValues<ILoginValues> = {
    email: "",
    password: ""
};

export interface ILoginValues {
    email: string
    password: string
}

export type LoginFormData = yup.InferType<typeof validation.login>

export type SignupFormData = yup.InferType<typeof validation.signup>

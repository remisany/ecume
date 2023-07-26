import * as yup from "yup";

const emailValidation = yup.string().required().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const passwordValidation = yup.string().required();

const login = yup.object({
    email: emailValidation,
    password: passwordValidation,
}).required()

const signup = yup.object({
    email: emailValidation,
}).required()

const password = yup.object({
    password: passwordValidation,
}).required()

const validation = {
    login: login,
    signup: signup,
    password: password
}

export default validation

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

const validation = {
    login: login,
    signup: signup
}

export default validation

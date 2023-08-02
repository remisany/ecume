import * as yup from "yup";

const emailValidation = yup.string().required().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const stringValidation = yup.string().required();

const login = yup.object({
    email: emailValidation,
    password: stringValidation,
}).required()

const signup = yup.object({
    email: emailValidation
}).required()

const password = yup.object({
    password: stringValidation
}).required()

const createProject = yup.object({
    title: stringValidation
}).required()

const validation = {
    login: login,
    signup: signup,
    password: password,
    createProject: createProject
}

export default validation

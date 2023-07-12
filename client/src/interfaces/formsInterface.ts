import {DefaultValues} from "react-hook-form";

export const loginDefaultValues: DefaultValues<ILoginValues> = {
    email: "",
    password: ""
};

export interface ILoginValues {
    email: string
    password: string
}

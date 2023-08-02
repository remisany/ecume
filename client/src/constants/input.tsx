import Input from "../components/common/Input";

export const InputPattern = ({control, errors, hasSubmit, name, placeholder}) => {
    return (
        <Input
            control={control}
            errors={errors}
            hasSubmit={hasSubmit}
            name={name}
            placeholder={placeholder}
            rules={{required: true}}
        />
    )
}

const email = (control, errors, hasSubmit) => {
    return (
        <InputPattern
            control={control}
            errors={errors}
            hasSubmit={hasSubmit}
            name="email"
            placeholder='Email'
        />
    )
}

const password = (control, errors, hasSubmit) => {
    return (
        <InputPattern
            control={control}
            errors={errors}
            hasSubmit={hasSubmit}
            name="password"
            placeholder="Mot de passe"
        />
    )
}

const input = {
    email: email,
    password: password,
}

export default input

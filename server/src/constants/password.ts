const generatePassword = () :string => (Math.random().toString(36).slice(-4))

export default generatePassword

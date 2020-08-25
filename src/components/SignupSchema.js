import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    nameFirst: Yup
    .string(),
    nameLast: Yup
    .string(),
    username: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
})

export default SignupSchema
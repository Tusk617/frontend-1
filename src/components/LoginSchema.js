import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username required')
    .min(3, 'Name must be at least three characters long'),
    email: yup
    .string()
    .required('Email required')
    .min(2, 'Must use a valid email'),
    password: yup
    .string()
    .required('Password required')
    .min(5, 'Password must be at least five characters long')
})

export default loginSchema;
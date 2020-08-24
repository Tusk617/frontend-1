import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username required')
    .min(2, 'Name must be at least two characters long'),
    password: yup
    .string()
    .required('Password required')
    .min(2, 'Name must be at least two characters long')
})

export default loginSchema;
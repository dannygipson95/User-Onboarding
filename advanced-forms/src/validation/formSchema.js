import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(5, 'The username must be at least three characters long')
    .required('The username is a required field'),
    email: yup.string()
    .email('The email must be a valid email address')
    .required('the email is a required field'),
    password: yup.string()
    .min(7, 'Password must be at least seven characters long')
    .required('Password is a required field')

})

export default formSchema
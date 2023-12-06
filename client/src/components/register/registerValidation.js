import { emailPattern } from '../../constants/formKeys';

export default function registerValidation(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password !== '' && values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long!';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
    } else if (values.confirmPassword !== '' && values.confirmPassword.length < 6) {
        errors.confirmPassword = 'Confirm Password must be at least 6 characters long!';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords don\'t match!'
    }

    return errors;
}

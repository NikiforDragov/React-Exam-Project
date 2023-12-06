import { emailPattern } from '../../constants/formKeys';

export default function loginValidation(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (
        values.password !== '' &&
        values.password.length < 6
    ) {
        errors.password = 'Password must be at least 6 characters long!';
    }

    return errors;
}

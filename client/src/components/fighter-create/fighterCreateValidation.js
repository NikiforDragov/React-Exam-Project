export default function fighterCreateValidation(values) {
    const errors = {};

    if (!values.fighterName) {
        errors.fighterName = 'Fighter Name is required';
    } else if (values.fighterName.length < 2) {
        errors.fighterName = 'Min 2 characters!';
    }

    if (!values.age) {
        errors.age = 'Age is required';
    } else if (values.age < 0) {
        errors.age = 'Age must be positive number!';
    } else if (values.age > 110) {
        errors.age = 'Max 110 years!';
    }

    if (!values.country) {
        errors.country = 'Country is required';
    } else if (values.country.length < 3) {
        errors.country = 'Min 3 characters!';
    }

    return errors
}
const imageUrlPattern = /^https:\/\//

export default function fighterEditValidation(values) {
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

    if (!values.fightingStyle) {
        errors.fightingStyle = 'Fighting Style is required';
    } else if (values.fightingStyle.length < 3) {
        errors.fightingStyle = 'Min 3 characters!';
    }

    if (!values.category) {
        errors.category = 'Category Style is required';
    } else if (values.category.length < 3) {
        errors.category = 'Min 3 characters!';
    }

    if (!values.imageUrl) {
        errors.imageUrl = 'Image URL is required';
    } else if (!imageUrlPattern.test(values.imageUrl)) {
        errors.imageUrl = 'Image Url must start with https://';
    }

    if (!values.description) {
        errors.description = 'Description is required';
    } else if (values.description.length < 10) {
        errors.description = 'Min 10 characters!';
    } else if (values.description.length > 300) {
        errors.description = 'Max 300 characters!';
    }

    return errors
}
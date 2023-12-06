import { useState } from 'react';

export default function useForm(submitHandler, initialValues, validateFunction) {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [touched, setTouched] = useState({});

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: '',
        }));
    };

    const onBlur = (e) => {
        setTouched((prevTouched) => ({
            ...prevTouched,
            [e.target.name]: true,
        }));

        const validationErrors = validateFunction(values);
        setFormErrors(validationErrors);
    };

    const reset = () => {
        setValues(initialValues);
        setFormErrors({});
        setTouched({});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateFunction(values);
        if (Object.keys(validationErrors).length === 0) {
            submitHandler(values);
        } else {
            setFormErrors(validationErrors);
        }
    };

    const setChangedInitialValues = (changedFormValues) => {
        setValues(changedFormValues);
    };

    return {
        values,
        formErrors,
        touched,
        onChange,
        onBlur,
        onSubmit,
        reset,
        setChangedInitialValues,
    };
}

import { useState } from 'react';

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const reset = () => {
        setValues(initialValues);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
    };

    const setChangedInitialValues = (changedFormValues) => {
        setValues(changedFormValues);
    };

    return {
        values,
        onChange,
        onSubmit,
        reset,
        setChangedInitialValues,
    };
}

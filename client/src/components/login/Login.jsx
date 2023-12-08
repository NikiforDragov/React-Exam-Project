import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ErrorAlert from '../error-alert/ErrorAlert';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

import { loginFormKeys } from '../../constants/formKeys';
import loginValidation from './loginValidation';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './Login.module.css';

export default function Login() {
    useEffect(() => {
        document.title = 'Login';
    }, []);

    const { loginSubmitHandler, serverError,resetServerError } = useContext(AuthContext);

    const { values, formErrors, touched, onChange, onBlur, onSubmit } = useForm(
        loginSubmitHandler,
        {
            [loginFormKeys.email]: '',
            [loginFormKeys.password]: '',
        },
        loginValidation
    );

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={onSubmit}>
                {serverError && <ErrorAlert ErrorMessage={serverError} onClose={resetServerError} />}
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        name={loginFormKeys.email}
                        value={values.email}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder='Enter email'
                        isInvalid={touched.email && !!formErrors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name={loginFormKeys.password}
                        value={values.password}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder='Password'
                        isInvalid={touched.password && !!formErrors.password}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className={styles.buttonContainer}>
                    <Button variant='dark' type='submit'>
                        Login
                    </Button>
                    <Link className={styles.link} to='/users/register'>
                        Don't have an account?
                    </Link>
                </div>
            </Form>
        </Container>
    );
}

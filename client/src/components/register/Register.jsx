import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import { registerFormKeys } from '../../constants/formKeys';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './Register.module.css';

export default function Register() {
    useEffect(() => {
		document.title = 'Register';
	}, []);

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [registerFormKeys.email]: '',
        [registerFormKeys.password]: '',
        [registerFormKeys.confirmPassword]: '',
    });

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        name={registerFormKeys.email}
                        placeholder='Enter email'
                        value={values.email}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name={registerFormKeys.password}
                        placeholder='Password'
                        value={values.password}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        name={registerFormKeys.confirmPassword}
                        placeholder='Confirm Password'
                        value={values.confirmPassword}
                        onChange={onChange}
                    />
                </Form.Group>
                <div className={styles.buttonContainer}>
                    <Button variant='dark' type='submit'>
                        Register
                    </Button>
                    <Link className={styles.link} to='/users/login'>
                        Already have an account?
                    </Link>
                </div>
            </Form>
        </Container>
    );
}

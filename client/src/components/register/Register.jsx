import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './Register.module.css';
import { useState } from 'react';

const formInitialState = {
    email: '',
    password: '',
    confirmPassword: '',
};

export default function Register() {
    const [registerValues, setRegisterValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setRegisterValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        console.log(registerValues);
    };

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={registerSubmitHandler}>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        placeholder='Enter email'
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        onChange={changeHandler}
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

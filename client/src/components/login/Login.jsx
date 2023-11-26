import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './Login.module.css';

const formInitialState = {
    email: '',
    password: '',
};

export default function Login() {
    const [loginValues, setLoginValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setLoginValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        console.log(loginValues);
    };

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={loginSubmitHandler}>
                <Form.Group className='mb-3' controlId='formEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        name='email'
                        value={loginValues.email}
                        onChange={changeHandler}
                        placeholder='Enter email'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        value={loginValues.password}
                        onChange={changeHandler}
                        placeholder='Password'
                    />
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

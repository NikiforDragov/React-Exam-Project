import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './Register.module.css';

export default function Register() {
    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' />
                </Form.Group>
                <div className={styles.buttonContainer}>
                    <Button variant='dark' type='submit'>
                        Register
                    </Button>
                    <Link className={styles.link} to='/users/login'>Already have an account?</Link>
                </div>
            </Form>
        </Container>
    );
}


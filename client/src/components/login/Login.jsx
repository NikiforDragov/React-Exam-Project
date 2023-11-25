import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './Login.module.css';

export default function Login() {
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
                <div className={styles.buttonContainer}>
                    <Button variant='dark' type='submit'>
                        Login
                    </Button>
                    <Link className={styles.link} to='/users/register'>Don't have an account?</Link>
                </div>
            </Form>
        </Container>
    );
}

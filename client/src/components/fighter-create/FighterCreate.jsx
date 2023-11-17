import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container } from 'react-bootstrap';

import styles from './fighterCreate.module.css';

export default function FighterCreate() {
    return (
        <Container className={styles.container}>
            <Form>
                <Form.Group className='mb-3' controlId='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type='text' placeholder='First name' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type='text' placeholder='Last name' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type='number' placeholder='Age' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='country'>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control type='text' placeholder='Country' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='fightingStyle'>
                    <Form.Label>Fighting Style:</Form.Label>
                    <Form.Control type='text' placeholder='Fighting Style' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control type='text' placeholder='Category' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control type='text' placeholder='https://' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='weight'>
                    <Form.Label>Weight:</Form.Label>
                    <Form.Control type='text' placeholder='Weight' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='height'>
                    <Form.Label>Height:</Form.Label>
                    <Form.Control type='text' placeholder='Height' />
                </Form.Group>

                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

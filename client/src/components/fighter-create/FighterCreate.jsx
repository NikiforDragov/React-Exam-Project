import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Container, ListGroup } from 'react-bootstrap';

import styles from './fighterCreate.module.css';
import { useState } from 'react';

const formInitialState = {
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    fightingStyle: '',
    category: '',
    imageUrl: '',
    weight: '',
    height: '',
};

export default function FighterCreate() {
    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Container className={styles.container}>
            <Form>
                <Form.Group className='mb-3' controlId='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type='text'
                        name='firstName'
                        placeholder='First name'
                        value={formValues.firstName}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                        type='text'
                        name='lastName'
                        placeholder='Last name'
                        value={formValues.lastName}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type='number'
                        name='age'
                        placeholder='Age'
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='country'>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                        type='text'
                        name='country'
                        value={formValues.country}
                        onChange={changeHandler}
                        placeholder='Country'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='fightingStyle'>
                    <Form.Label>Fighting Style:</Form.Label>
                    <Form.Control
                        type='text'
                        name='fightingStyle'
                        value={formValues.fightingStyle}
                        onChange={changeHandler}
                        placeholder='Fighting Style'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type='text'
                        name='category'
                        value={formValues.category}
                        onChange={changeHandler}
                        placeholder='Category'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type='text'
                        name='imageUrl'
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                        placeholder='https://'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='weight'>
                    <Form.Label>Weight:</Form.Label>
                    <Form.Control
                        type='text'
                        name='weight'
                        value={formValues.weight}
                        onChange={changeHandler}
                        placeholder='Weight'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='height'>
                    <Form.Label>Height:</Form.Label>
                    <Form.Control
                        type='text'
                        name='height'
                        value={formValues.height}
                        onChange={changeHandler}
                        placeholder='Height'
                    />
                </Form.Group>

                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

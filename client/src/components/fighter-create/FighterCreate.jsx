import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as fighterService from '../../services/fighterService';
import { createFormKeys } from '../../constants/formKeys';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './FighterCreate.module.css';

const formInitialState = {
    [createFormKeys.fighterName]: '',
    [createFormKeys.age]: '',
    [createFormKeys.country]: '',
    [createFormKeys.fightingStyle]: '',
    [createFormKeys.category]: '',
    [createFormKeys.imageUrl]: '',
    [createFormKeys.description]: '',
};

export default function FighterCreate() {
    const [formValues, setFormValues] = useState(formInitialState);

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const createFighterSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await fighterService.create(formValues);

            navigate('/fighters');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className={styles.container}>
            <Form onSubmit={createFighterSubmitHandler}>
                <Form.Group className='mb-3' controlId='fighterName'>
                    <Form.Label>Fighter Name:</Form.Label>
                    <Form.Control
                        type='text'
                        name={createFormKeys.fighterName}
                        placeholder='Fighter name'
                        value={formValues.fighterName}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='age'>
                    <Form.Label>Age:</Form.Label>
                    <Form.Control
                        type='number'
                        name={createFormKeys.age}
                        placeholder='Age'
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='country'>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                        type='text'
                        name={createFormKeys.country}
                        value={formValues.country}
                        onChange={changeHandler}
                        placeholder='Country'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='fightingStyle'>
                    <Form.Label>Fighting Style:</Form.Label>
                    <Form.Control
                        type='text'
                        name={createFormKeys.fightingStyle}
                        value={formValues.fightingStyle}
                        onChange={changeHandler}
                        placeholder='Fighting Style'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type='text'
                        name={createFormKeys.category}
                        value={formValues.category}
                        onChange={changeHandler}
                        placeholder='Category'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type='text'
                        name={createFormKeys.imageUrl}
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                        placeholder='https://'
                    />
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as='textarea'
                        name={createFormKeys.description}
                        rows={3}
                        value={formValues.description}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Button variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}



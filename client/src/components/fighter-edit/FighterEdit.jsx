import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './FighterEdit.module.css';
import { fighterFormKeys } from '../../constants/formKeys';
import * as fighterService from '../../services/fighterService';
import { useParams } from 'react-router-dom';

const formInitialState = {
    [fighterFormKeys.fighterName]: '',
    [fighterFormKeys.age]: '',
    [fighterFormKeys.country]: '',
    [fighterFormKeys.fightingStyle]: '',
    [fighterFormKeys.category]: '',
    [fighterFormKeys.imageUrl]: '',
    [fighterFormKeys.description]: '',
};

export default function FighterEdit() {
    const [formValues, setFormValues] = useState(formInitialState);

    const { fighterId } = useParams();

    useEffect(() => {
        fighterService
            .getOne(fighterId)
            .then((fighterData) => {
                setFormValues(fighterData);
            })
            .catch((err) => console.err(err.message));
    }, [fighterId]);

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const editFighterSubmitHandler = (e) => {
        e.preventDefault();
        console.log('fighter edited');
    };

    return (
        <Container className={styles.container}>
            <Form onSubmit={editFighterSubmitHandler}>
                <Form.Group className='mb-3' controlId='fighterName'>
                    <Form.Label>Fighter Name:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.fighterName}
                        placeholder='Fighter name'
                        value={formValues.fighterName}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='age'>
                    <Form.Label>Age:</Form.Label>
                    <Form.Control
                        type='number'
                        name={fighterFormKeys.age}
                        placeholder='Age'
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='country'>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.country}
                        value={formValues.country}
                        onChange={changeHandler}
                        placeholder='Country'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='fightingStyle'>
                    <Form.Label>Fighting Style:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.fightingStyle}
                        value={formValues.fightingStyle}
                        onChange={changeHandler}
                        placeholder='Fighting Style'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.category}
                        value={formValues.category}
                        onChange={changeHandler}
                        placeholder='Category'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.imageUrl}
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                        placeholder='https://'
                    />
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as='textarea'
                        name={fighterFormKeys.description}
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

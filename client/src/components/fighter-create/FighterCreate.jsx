import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as fighterService from '../../services/fighterService';
import { fighterFormKeys } from '../../constants/formKeys';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './FighterCreate.module.css';

const formInitialState = {
    [fighterFormKeys.fighterName]: '',
    [fighterFormKeys.age]: '',
    [fighterFormKeys.country]: '',
    [fighterFormKeys.fightingStyle]: '',
    [fighterFormKeys.category]: '',
    [fighterFormKeys.imageUrl]: '',
    [fighterFormKeys.description]: '',
};

export default function FighterCreate() {
    const [fighter, setFighter] = useState(formInitialState);

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFighter((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const createFighterSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await fighterService.create(fighter);

            navigate('/fighters');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={createFighterSubmitHandler}>
                <h1>
                    Create <Badge bg='secondary'>Fighter</Badge>
                </h1>
                <Row className='mb-3'>
                    <Form.Group
                        as={Col}
                        className='mb-3'
                        controlId='fighterName'
                    >
                        <Form.Label>Fighter Name:</Form.Label>
                        <Form.Control
                            type='text'
                            name={fighterFormKeys.fighterName}
                            placeholder='Fighter name'
                            value={fighter.fighterName}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3' controlId='age'>
                        <Form.Label>Age:</Form.Label>
                        <Form.Control
                            type='number'
                            name={fighterFormKeys.age}
                            placeholder='Age'
                            value={fighter.age}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3' controlId='country'>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control
                            type='text'
                            name={fighterFormKeys.country}
                            value={fighter.country}
                            onChange={changeHandler}
                            placeholder='Country'
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className='mb-3'
                        controlId='fightingStyle'
                    >
                        <Form.Label>Fighting Style:</Form.Label>
                        <Form.Control
                            type='text'
                            name={fighterFormKeys.fightingStyle}
                            value={fighter.fightingStyle}
                            onChange={changeHandler}
                            placeholder='Fighting Style'
                        />
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3' controlId='category'>
                        <Form.Label>Category:</Form.Label>
                        <Form.Control
                            type='text'
                            name={fighterFormKeys.category}
                            value={fighter.category}
                            onChange={changeHandler}
                            placeholder='Category'
                        />
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.imageUrl}
                        value={fighter.imageUrl}
                        onChange={changeHandler}
                        placeholder='https://'
                    />
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as='textarea'
                        name={fighterFormKeys.description}
                        rows={4}
                        value={fighter.description}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Button className={styles.button} variant='dark' type='submit'>
                    Create
                </Button>
            </Form>
        </Container>
    );
}

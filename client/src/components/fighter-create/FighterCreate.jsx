import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import * as fighterService from '../../services/fighterService';
import { fighterFormKeys } from '../../constants/formKeys';
import fighterCreateValidation from './FighterCreateValidation';

import ErrorAlert from '../error-alert/ErrorAlert';
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
    const [serverError, setServerError] = useState(null);

    useEffect(() => {
        document.title = 'Create';
    }, []);

    const navigate = useNavigate();

    const createFighterSubmitHandler = async () => {
        try {
            await fighterService.create(fighter);

            reset();

            navigate('/fighters');
        } catch (error) {
            console.error(error.message);
            setServerError(error.message);
        }
    };

    const {
        values: fighter,
        formErrors,
        touched,
        onChange,
        onBlur,
        onSubmit,
        reset,
    } = useForm(
        createFighterSubmitHandler,
        formInitialState,
        fighterCreateValidation
    );

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={onSubmit}>
                <h1>
                    Create <Badge bg='secondary'>Fighter</Badge>
                </h1>
                {serverError && (
                    <ErrorAlert
                        ErrorMessage={serverError}
                        onClose={() => setServerError(null)}
                    />
                )}
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
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={
                                touched.fighterName && !!formErrors.fighterName
                            }
                        />
                        <Form.Control.Feedback type='invalid'>
                            {formErrors.fighterName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3' controlId='age'>
                        <Form.Label>Age:</Form.Label>
                        <Form.Control
                            type='number'
                            name={fighterFormKeys.age}
                            placeholder='Age'
                            value={fighter.age}
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={touched.age && !!formErrors.age}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {formErrors.age}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3' controlId='country'>
                        <Form.Label>Country:</Form.Label>
                        <Form.Control
                            type='text'
                            name={fighterFormKeys.country}
                            value={fighter.country}
                            onChange={onChange}
                            placeholder='Country'
                            onBlur={onBlur}
                            isInvalid={touched.country && !!formErrors.country}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {formErrors.country}
                        </Form.Control.Feedback>
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
                            onChange={onChange}
                            placeholder='Fighting Style'
                            onBlur={onBlur}
                            isInvalid={touched.fightingStyle && !!formErrors.fightingStyle}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {formErrors.fightingStyle}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} className='mb-3' controlId='category'>
                        <Form.Label>Category:</Form.Label>
                        <Form.Control
                            type='text'
                            name={fighterFormKeys.category}
                            value={fighter.category}
                            onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                    />
                </Form.Group>
                <Button className={styles.button} variant='dark' type='submit'>
                    Create
                </Button>
            </Form>
        </Container>
    );
}

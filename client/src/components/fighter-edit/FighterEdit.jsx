import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';
import fighterEditValidation from './fighterEditValidation';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';

import styles from './FighterEdit.module.css';
import { fighterFormKeys } from '../../constants/formKeys';
import * as fighterService from '../../services/fighterService';

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
    const { fighterId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Edit';
    }, []);

    useEffect(() => {
        fighterService
            .getOne(fighterId)
            .then((fighterData) => {
                setChangedInitialValues(fighterData);
            })
            .catch((err) => console.error(err.message));
    }, [fighterId]);

    const editFighterSubmitHandler = async () => {
        try {
            await fighterService.edit(fighterId, fighterData);
            navigate(`/fighters/${fighterId}/details`);
        } catch (error) {
            console.err(err.message);
        }
    };

    const {
        values: fighterData,
        formErrors,
        touched,
        onChange,
        onBlur,
        onSubmit,
        reset,
        setChangedInitialValues,
    } = useForm(
        editFighterSubmitHandler,
        formInitialState,
        fighterEditValidation
    );

    return (
        <Container className={styles.formContainer}>
            <Form className={styles.form} onSubmit={onSubmit}>
                <h1>
                    Edit <Badge bg='secondary'>Fighter</Badge>
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
                            value={fighterData.fighterName}
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
                            value={fighterData.age}
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
                            value={fighterData.country}
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
                            value={fighterData.fightingStyle}
                            placeholder='Fighting Style'
                            onChange={onChange}
                            onBlur={onBlur}
                            isInvalid={
                                touched.fightingStyle &&
                                !!formErrors.fightingStyle
                            }
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
                            value={fighterData.category}
                            onChange={onChange}
                            placeholder='Category'
                            onBlur={onBlur}
                            isInvalid={
                                touched.category && !!formErrors.category
                            }
                        />
                        <Form.Control.Feedback type='invalid'>
                            {formErrors.category}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type='text'
                        name={fighterFormKeys.imageUrl}
                        value={fighterData.imageUrl}
                        onChange={onChange}
                        placeholder='https://'
                        onBlur={onBlur}
                        isInvalid={touched.imageUrl && !!formErrors.imageUrl}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.imageUrl}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as='textarea'
                        name={fighterFormKeys.description}
                        rows={4}
                        value={fighterData.description}
                        onChange={onChange}
                        onBlur={onBlur}
                        isInvalid={
                            touched.description && !!formErrors.description
                        }
                    />
                    <Form.Control.Feedback type='invalid'>
                        {formErrors.description}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    as={Link}
                    to={-1}
                    className={styles.button}
                    variant='dark'
                    type='submit'
                >
                    Back
                </Button>
                <Button className={styles.button} variant='dark' type='submit'>
                    Edit
                </Button>
            </Form>
        </Container>
    );
}

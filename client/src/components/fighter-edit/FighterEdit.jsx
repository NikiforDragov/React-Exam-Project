
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import styles from './FighterEdit.module.css';

export default function FighterEdit(props) {
    return (
        <Container className={styles.container}>
            <Form onSubmit={editFighterSubmitHandler}>
                <Form.Group className='mb-3' controlId='fighterName'>
                    <Form.Label>Fighter Name:</Form.Label>
                    <Form.Control
                        type='text'
                        name={editFormKeys.fighterName}
                        placeholder='Fighter name'
                        value={formValues.fighterName}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='age'>
                    <Form.Label>Age:</Form.Label>
                    <Form.Control
                        type='number'
                        name={editFormKeys.age}
                        placeholder='Age'
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='country'>
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                        type='text'
                        name={editFormKeys.country}
                        value={formValues.country}
                        onChange={changeHandler}
                        placeholder='Country'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='fightingStyle'>
                    <Form.Label>Fighting Style:</Form.Label>
                    <Form.Control
                        type='text'
                        name={editFormKeys.fightingStyle}
                        value={formValues.fightingStyle}
                        onChange={changeHandler}
                        placeholder='Fighting Style'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='category'>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type='text'
                        name={editFormKeys.category}
                        value={formValues.category}
                        onChange={changeHandler}
                        placeholder='Category'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='imageUrl'>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        type='text'
                        name={editFormKeys.imageUrl}
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                        placeholder='https://'
                    />
                </Form.Group>
                <Form.Group controlId='description'>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as='textarea'
                        name={editFormKeys.description}
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

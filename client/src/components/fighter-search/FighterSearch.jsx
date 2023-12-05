import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

import styles from './FighterSearch.module.css';
import Button from 'react-bootstrap/esm/Button';

export default function Search() {
    return (
        <>
            <Container className={styles.formContainer}>
                <Form className={styles.form}>
                    <Form.Control
                        className={styles.formInput}
                        size='lg'
                        type='text'
                        placeholder='Search by Name'
                    />
                <Button type='submit' variant='secondary'>Search</Button>
                </Form>
            </Container>
        </>
    );
}

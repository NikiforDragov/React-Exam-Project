import { useState, useEffect } from 'react';

import ErrorAlert from '../error-alert/ErrorAlert';

import useForm from '../../hooks/useForm';
import * as fighterService from '../../services/fighterService';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';

import styles from './FighterSearch.module.css';
import FighterList from '../fighter-list/FighterList';

export default function Search() {
    useEffect(() => {
        document.title = 'Search';
    }, []);

    const [serverError, setServerError] = useState(null);
    const [searchedFighter, setSearchedFighter] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const searchValidate = (values) => {
        const errors = {};

        if (!values.fighterName) {
            errors.fighterName = 'Search param is required!';
        }

        return errors;
    };

    const searchHandler = async () => {
        try {
            const result = await fighterService.searchByName(
                values.fighterName
            );
            setSearchedFighter(result);
            setIsSearched(true);
        } catch (error) {
            console.error(error.message);
            setServerError(error.message);
        }
    };

    const { values, formErrors, touched, onChange, onBlur, onSubmit } = useForm(
        searchHandler,
        {
            fighterName: '',
        },
        searchValidate
    );
    return (
        <>
            <Container className={styles.formContainer}>
                <Form className={styles.form} onSubmit={onSubmit}>
                    <Form.Control
                        className={styles.formInput}
                        size='lg'
                        type='text'
                        name='fighterName'
                        placeholder='Search by Name'
                        value={values.fighterName}
                        onChange={onChange}
                        onBlur={onBlur}
                        isInvalid={
                            touched.fighterName && !!formErrors.fighterName
                        }
                    />
                    <Button type='submit' variant='secondary'>
                        Search
                    </Button>
                </Form>
                <Container>
                    {serverError && (
                        <ErrorAlert
                            ErrorMessage={serverError}
                            onClose={() => setServerError(null)}
                        />
                    )}
                </Container>
            </Container>
            {searchedFighter.length > 0 && (
                <FighterList fighters={searchedFighter} />
            )}
            {isSearched && searchedFighter.length === 0 && (
                <Container className={styles.noResults}>
                    <Alert
                        variant='danger'
                        onClick={() => setIsSearched(false)}
                        dismissible
                    >
                        <p>Sorry no results!</p>
                    </Alert>
                </Container>
            )}
        </>
    );
}

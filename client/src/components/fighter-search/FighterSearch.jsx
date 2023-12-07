import { useState, useEffect } from 'react';

import useForm from '../../hooks/useForm';
import * as fighterService from '../../services/fighterService';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

import styles from './FighterSearch.module.css';
import FighterList from '../fighter-list/FighterList';

export default function Search() {
    useEffect(() => {
        document.title = 'Search';
    }, []);

    const [searchedFighter, setSearchedFighter] = useState([]);

    const searchValidate = (values) => {
        const errors = {};

        if (!values.fighterName) {
            errors.fighterName = 'Search param is required!';
        }

        return errors;
    };

    const searchHandler = async () => {
        if (values.fighterName !== '') {
            const result = await fighterService.searchByName(
                values.fighterName
            );
            setSearchedFighter(result);
        }
    };

    const {values, formErrors, touched, onChange, onBlur, onSubmit} = useForm(
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
                        isInvalid={touched.fighterName && !!formErrors.fighterName}
                    />
                    <Button type='submit' variant='secondary'>
                        Search
                    </Button>
                </Form>
            </Container>
            <FighterList fighters={searchedFighter} />
        </>
    );
}

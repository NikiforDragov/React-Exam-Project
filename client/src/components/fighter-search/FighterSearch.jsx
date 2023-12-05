import { useState } from 'react';

import useForm from '../../hooks/useForm';
import * as fighterService from '../../services/fighterService';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';

import styles from './FighterSearch.module.css';
import FighterList from '../fighter-list/FighterList';

export default function Search() {
    const [searchedFighter, setSearchedFighter] = useState([]);

    const searchHandler = async () => {
        if (values.fighterName !== '') {
            const result = await fighterService.searchByName(
                values.fighterName
            );
            setSearchedFighter(result);
        }
    };

    const { values, onChange, onSubmit } = useForm(searchHandler, {
        fighterName: '',
    });
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

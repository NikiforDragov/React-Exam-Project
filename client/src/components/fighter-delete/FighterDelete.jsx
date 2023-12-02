import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as fighterService from '../../services/fighterService';
import { Path } from '../../constants/paths';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function FighterDelete() {
    const { fighterId } = useParams();
    const [ fighter, setFighter ] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fighterService
            .getOne(fighterId)
            .then((result) => setFighter(result))
            .catch((error) => console.error('Error fetching fighter:', error));
    }, [fighterId]);

    const deleteFighterHandler = async () => {
        try {
            await fighterService.del(fighterId);
            navigate(Path.ALL_FIGHTERS);
        } catch (error) {
            console.error('Error deleting fighter:', error);
        }
    };

    return (
        <Container>
            <h2>Delete Fighter</h2>
            <p>Are you sure you want to delete {fighter.fighterName}?</p>
            <Button variant='danger' onClick={deleteFighterHandler}>
                Delete
            </Button>
            <Button variant='secondary' onClick={() => navigate(Path.ALL_FIGHTERS)}>
                Cancel
            </Button>
        </Container>
    );
}

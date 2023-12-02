import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function FighterDelete() {
    const navigate = useNavigate();
    return (
        <Container>
            <h2>Delete Fighter</h2>
            <p>Are you sure you want to delete {fighterData.fighterName}?</p>
            <Button variant='danger' onClick={handleDelete}>
                Delete
            </Button>{' '}
            <Button variant='secondary' onClick={() => navigate(Path.FIGHTERS)}>
                Cancel
            </Button>
        </Container>
    );
}

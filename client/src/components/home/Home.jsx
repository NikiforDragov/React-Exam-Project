import { Link } from 'react-router-dom';
import { Path } from '../../constants/paths';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <Card className='text-center'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to
                    additional content.
                </Card.Text>
                <Button as={Link} to={Path.ALL_FIGHTERS} variant='dark'>See All Fighters</Button>
            </Card.Body>
            <Card.Footer className='text-muted'>2 days ago</Card.Footer>
        </Card>
    );
}

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function FighterCard({ _id, imageUrl, fighterName, age }) {
    return (
        <Col key={_id} md={4}>
            <Card className='custom-card'>
                <Card.Img variant='top' src={imageUrl} className='card-image' />
                <Card.Body>
                    <Card.Title>{`${fighterName}`}</Card.Title>
                    <Card.Text>{age}</Card.Text>
                    <Button
                        as={Link}
                        to={`/fighters/${_id}/details`}
                        variant='primary'
                    >
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

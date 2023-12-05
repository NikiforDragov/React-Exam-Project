import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import styles from './FighterCard.module.css';

export default function FighterCard({ _id, imageUrl, fighterName, age }) {
    return (
        <Col key={_id} md={4}>
            <Card className='custom-card'>
                <Card.Img variant='top' src={imageUrl} className={`card-image ${styles.cardImage}`} />
                <Card.Body>
                    <Card.Title>{`${fighterName}`}</Card.Title>
                    <Card.Text>Age: {age}</Card.Text>
                    <Button
                        as={Link}
                        to={`/fighters/${_id}/details`}
                        variant='dark'
                    >
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

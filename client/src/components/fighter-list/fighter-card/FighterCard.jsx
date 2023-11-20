import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function FighterCard({
    _id,
    imageUrl,
    firstName,
    lastName,
    age,
}) {
    return (
        <Col key={_id} md={4}>
            <Card className='custom-card'>
                <Card.Img variant='top' src={imageUrl} className='card-image' />
                <Card.Body>
                    <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
                    <Card.Text>{age}</Card.Text>
                    <Button variant='primary'>Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

import { Card, Button, Col } from 'react-bootstrap';

export default function FighterCard(cardData) {
    return (
        <Col key={cardData._id} md={4}>
            <Card className='custom-card'>
                <Card.Img
                    variant='top'
                    src={cardData.imgUrl}
                    className='card-image'
                />
                <Card.Body>
                    <Card.Title>{cardData.title}</Card.Title>
                    <Card.Text>{cardData.content}</Card.Text>
                    <Button variant='primary'>Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

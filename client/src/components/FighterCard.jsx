import React from 'react';

import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import './fighterCardStyles.css';

const CardGrid = () => {
    const cardData = [
        { title: 'Card 1', content: 'This is the content of Card 1' },
        { title: 'Card 2', content: 'This is the content of Card 2' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
        { title: 'Card 3', content: 'This is the content of Card 3' },
    ];

    return (
        <Container>
            <Row>
                {cardData.map((card, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Img
                                variant='top'
                                src='https://images.daznservices.com/di/library/DAZN_News/a3/49/conor-mcgregor_wx0eeamnxrs51rpr1b7n9o8gw.jpg?t=-1883069318&w=800'
                            />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.content}</Card.Text>
                                <Button variant='primary'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardGrid;

import React from 'react';

import { Card, Container, Button, Row, Col } from 'react-bootstrap';
import './fighterListStyles.css';

const FightersList = () => {
    const cardData = [
        {
            title: 'Card 1',
            content: 'This is the content of Card 1',
            imgUrl: 'https://images.daznservices.com/di/library/DAZN_News/a3/49/conor-mcgregor_wx0eeamnxrs51rpr1b7n9o8gw.jpg?t=-1883069318&w=800',
        },
        {
            title: 'Card 2',
            content: 'This is the content of Card 2',
            imgUrl: 'https://pbs.twimg.com/profile_images/1322781586513895425/G_stL2vh.jpg',
        },
        {
            title: 'Card 3',
            content: 'This is the content of Card 3',
            imgUrl: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_sm/s3/2023-10/102623-hero-alex-pereira_GettyImages-1579885807.jpg?h=d1cb525d&itok=a7BEPFqy',
        },
        {
            title: 'Card 4',
            content: 'This is the content of Card 4',
            imgUrl: 'https://people.com/thmb/6xHId2YYLH1eHE8oN0wLKaQIAyw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(739x134:741x136)/_israel-adesanya-081723-1-c843fa031f2848d9bed0a49ccfd8cc99.jpg',
        },
        {
            title: 'Card 5',
            content: 'This is the content of Card 5',
            imgUrl: 'https://kickopunch.com/wp-content/uploads/2020/11/PROCHAZKA_JIRI_L_07-11.png',
        },
        {
            title: 'Card 6',
            content: 'This is the content of Card 6',
            imgUrl: 'https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-09/STRICKLAND_SEAN_L_BELTMOCK.png?itok=QLnBsSSa',
        },
    ];

    return (
        <Container>
            <Row>
                {cardData.map((card, index) => (
                    <Col key={index} md={4}>
                        <Card className='custom-card'>
                            <Card.Img
                                variant='top'
                                src={card.imgUrl}
                                className='card-image'
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

export default FightersList;

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as fighterService from '../../services/fighterService';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function FighterDetails() {
    const [fighter, setFighter] = useState({});
    const { fighterId } = useParams();

    useEffect(() => {
        fighterService.getOne(fighterId).then((result) => {
            console.log(result);
            setFighter(result);
        });
    }, [fighterId]);

    return (
        <Card>
            <Card.Img variant='top' src={fighter.imageUrl} />
            <Card.Body>
                <Card.Title>{fighter.fighterName}</Card.Title>
                <Card.Text>{fighter.description}</Card.Text>
            </Card.Body>
            <ListGroup className='list-group-flush'>
                <ListGroup.Item>Age: {fighter.age}</ListGroup.Item>
                <ListGroup.Item>Fighting style: {fighter.fightingStyle}</ListGroup.Item>
                <ListGroup.Item>Category: {fighter.category}</ListGroup.Item>
                <ListGroup.Item>Country: {fighter.country}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link as={Link} to='/fighters'>
                    Back
                </Card.Link>
                <Card.Link as={Link} to='/fighters/edit'>
                    Edit
                </Card.Link>
                <Card.Link as={Link} to='/fighters/delete'>
                    Delete
                </Card.Link>
            </Card.Body>
        </Card>
    );
}


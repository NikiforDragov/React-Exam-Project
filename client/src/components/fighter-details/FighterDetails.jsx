import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as fighterService from '../../services/fighterService';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import FighterDelete from './fighter-delete/FighterDelete';

export default function FighterDetails() {
    const [fighter, setFighter] = useState({});
    const { fighterId } = useParams();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        fighterService.getOne(fighterId).then((result) => {
            setFighter(result);
        });
    }, [fighterId]);

    const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

    return (
        <>
            <Card>
                <Card.Img variant='top' src={fighter.imageUrl} />
                <Card.Body>
                    <Card.Title>{fighter.fighterName}</Card.Title>
                    <Card.Text>{fighter.description}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item>Age: {fighter.age}</ListGroup.Item>
                    <ListGroup.Item>
                        Fighting style: {fighter.fightingStyle}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Category: {fighter.category}
                    </ListGroup.Item>
                    <ListGroup.Item>Country: {fighter.country}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button as={Link} to='/fighters'>
                        Back
                    </Button>
                    <Button as={Link} to={`/fighters/${fighterId}/edit`}>
                        Edit
                    </Button>
                    <Button variant='dark' onClick={toggleDeleteModal}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
            {showDeleteModal && (
                <FighterDelete
                    toggleDeleteModal={toggleDeleteModal}
                    showDeleteModal={showDeleteModal}
                    {...fighter}
                />
            )}
        </>
    );
}

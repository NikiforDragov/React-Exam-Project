import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as fighterService from '../../services/fighterService';
import AuthContext from '../../contexts/authContext';

import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import FighterDelete from '../fighter-delete/FighterDelete';

import styles from './FighterDetails.module.css';

export default function FighterDetails() {
    const [fighter, setFighter] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    const [canLike, setCanLike] = useState(true);
    const { isAuthenticated } = useContext(AuthContext);
    const { userId } = useContext(AuthContext);
    const { fighterId } = useParams();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        document.title = 'Details';
    }, []);

    useEffect(() => {
        fighterService.getOne(fighterId).then((result) => {
            setFighter(result);
            setIsOwner(userId === result._ownerId);
        });
    }, [fighterId]);

    const addLikeHandler = () => {
        setCanLike(false);
    };

    const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

    return (
        <Container className={styles.cardContainer}>
            <Card className={styles.card}>
                <Card.Img
                    className={styles.cardImage}
                    variant='top'
                    src={fighter.imageUrl}
                />
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
                    <Button
                        variant='dark'
                        className={styles.button}
                        as={Link}
                        to={-1}
                    >
                        Back
                    </Button>
                    {isAuthenticated &&
                        (isOwner ? (
                            <>
                                <Button
                                    variant='dark'
                                    className={styles.button}
                                    as={Link}
                                    to={`/fighters/${fighterId}/edit`}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant='danger'
                                    className={styles.button}
                                    onClick={toggleDeleteModal}
                                >
                                    Delete
                                </Button>
                            </>
                        ) : (
                            <>
                                {canLike ? (
                                    <Button
                                        variant='dark'
                                        onClick={addLikeHandler}
                                        className={styles.button}
                                    >
                                        Like
                                    </Button>
                                ) : (
                                    <Button
                                        variant='dark'
                                        className={styles.button}
                                    >
                                        Already Liked
                                    </Button>
                                )}
                            </>
                        ))}
                </Card.Body>
            </Card>
            {showDeleteModal && (
                <FighterDelete
                    toggleDeleteModal={toggleDeleteModal}
                    showDeleteModal={showDeleteModal}
                    fighterId={fighterId}
                    {...fighter}
                />
            )}
        </Container>
    );
}

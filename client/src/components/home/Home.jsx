import { Link } from 'react-router-dom';
import { Path } from '../../constants/paths';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import styles from './Home.module.css';

export default function Home() {
    return (
        <Container className={styles.cardContainer}>
            <Card className={styles.card}>
                <Card.Header className={styles.cardHeader}>
                    <h1>Welcome to my project website!</h1>
                </Card.Header>
                <Card.Body className={styles.cardBody}>
                    <Card.Text>
                        <h4>
                            Here people can share, find and like their favorite
                            fighters.
                        </h4>
                    </Card.Text>
                    {/* <Image
                        src='/404.png'
                        alt='home'
                        fluid
                    /> */}
                </Card.Body>
                <Card.Footer>
                    <Button
                        className={styles.cardButton}
                        as={Link}
                        to={Path.ALL_FIGHTERS}
                        variant='dark'
                    >
                        See All Fighters
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}

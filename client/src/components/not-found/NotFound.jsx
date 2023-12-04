import { Link } from 'react-router-dom';
import { Path } from '../../constants/paths';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';

export default function NotFound() {
    return (
        <Container>
            <Row
                className='justify-content-center align-items-center'
                style={{ height: '100vh', backgroundColor: 'white' }}
            >
                <Col xs={12} md={6} className='text-center'>
                    <Image
                        src='/404.png'
                        alt='404 Not Found'
                        fluid
                    />
                </Col>
                <Col xs={12} md={6} className='text-center'>
                    <h1>404 Not Found</h1>
                    <p>
                        The page you are looking for might be in another galaxy.
                    </p>
                    <Button variant={'dark'} as={Link} to='/'>Go Home</Button>
                </Col>
            </Row>
        </Container>
    );
}

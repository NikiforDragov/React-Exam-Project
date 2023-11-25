import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar
            expand='lg'
            className='bg-body-tertiary'
            bg='dark'
            data-bs-theme='dark'
            style={{ marginBottom: '2em' }}
        >
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    Fighters
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/fighters'>
                            All fighters
                        </Nav.Link>
                        <Nav.Link as={Link} to='/fighters/create'>
                            Create fighter
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/users/login'>
                            Login
                        </Nav.Link>
                        <Nav.Link  as={Link} to='/users/register'>
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

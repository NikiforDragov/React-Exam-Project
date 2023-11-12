import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <Navbar.Brand href='#home'>Fighters</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#link'>All fighters</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#deets'>Login</Nav.Link>
                        <Nav.Link eventKey={2} href='#memes'>
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

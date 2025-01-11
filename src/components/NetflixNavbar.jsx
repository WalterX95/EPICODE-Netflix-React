import { Navbar, Nav, Container } from 'react-bootstrap';

const NetflixNavbar = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#221f1f' }}>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src="/src/assets/logo.png" alt="Logo" style={{ width: '100px', height: '55px' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
                            <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
                            <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
                            <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
                            <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-search icons mx-2"></i>
                            <div id="kids" className="fw-bold">KIDS</div>
                            <i className="bi bi-bell icons mx-2"></i>
                            <i className="bi bi-person-circle icons mx-2"></i>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NetflixNavbar;
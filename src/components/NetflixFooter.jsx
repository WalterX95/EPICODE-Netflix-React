import { Row, Col, Button } from 'react-bootstrap';

const NetflixFooter = () => {
    return (
        <>
            <footer>
                <Row className="justify-content-center mt-5" style={{ backgroundColor: '#221f1f' }}>
                    <Col md={6}>
                        <Row>
                            <Col className="mb-2">
                                <i className="bi bi-facebook footer-icon me-2"></i>
                                <i className="bi bi-instagram footer-icon me-2"></i>
                                <i className="bi bi-twitter footer-icon me-2"></i>
                                <i className="bi bi-youtube footer-icon"></i>
                            </Col>
                        </Row>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
                            {[
                                [
                                    { text: 'Audio and Subtitles', href: '#' },
                                    { text: 'Media Center', href: '#' },
                                    { text: 'Privacy', href: '#' },
                                    { text: 'Contact us', href: '#' },
                                ],
                                [
                                    { text: 'Audio Description', href: '#' },
                                    { text: 'Investor Relations', href: '#' },
                                    { text: 'Legal Notices', href: '#' },
                                ],
                                [
                                    { text: 'Help Center', href: '#' },
                                    { text: 'Jobs', href: '#' },
                                    { text: 'Cookie Preferences', href: '#' },
                                ],
                                [
                                    { text: 'Gift Cards', href: '#' },
                                    { text: 'Terms of Use', href: '#' },
                                    { text: 'Corporate Information', href: '#' },
                                ],
                            ].map((group, idx) => (
                                <Col key={idx} className="footer-links">
                                    {group.map((link, i) => (
                                        <p key={i}>
                                            <a href={link.href}>{link.text}</a>
                                        </p>
                                    ))}
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    className="footer-button rounded-0 mt-3"
                                >
                                    Service Code
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2 mt-2 copyright">
                                © 1997-2023 Netflix, Inc.
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </footer>
        </>
    )
};

export default NetflixFooter;
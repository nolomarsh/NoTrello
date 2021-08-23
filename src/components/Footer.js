import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/Footer.css'

let Footer = () => {
    return (
        <footer class="footer_bar">
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Notrello</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer

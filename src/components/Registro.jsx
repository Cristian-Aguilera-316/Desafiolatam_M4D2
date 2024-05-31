// Registro.jsx
import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import { Container, Row, Col } from 'react-bootstrap';

const Registro = () => {
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const handleAlert = (message, type) => {
        setAlertMessage(message);
        setAlertType(type);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Crea una cuenta</h1>
                </Col>
            </Row>
            <Row className="social-buttons" style={{ alignItems: 'center'}}>
                <Col >
                    <SocialButton icon="facebook" />
                </Col>
                <Col>
                    <SocialButton icon="github" />
                </Col>
                <Col>
                    <SocialButton icon="linkedin" />
                </Col>
            </Row>
            <p className='text1'>O usa tu email para registrarte</p>
            <Row className='form'>
                <Col>
                    <Formulario onAlert={handleAlert} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Alert message={alertMessage} type={alertType} />
                </Col>
            </Row>
        </Container>
    );
};

export default Registro;
// Formulario.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ onAlert }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            onAlert('Completa todos los campos', 'danger');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            onAlert('El formato del email es incorrecto', 'danger');
            return;
        }

        if (password !== confirmPassword) {
            onAlert('Las contraseñas no coinciden', 'danger');
            return;
        }

        onAlert('Registro exitoso', 'success');
    };

    return (
        <Form onSubmit={handleSubmit} className="formulario">
            <Form.Group controlId="formName">
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Control
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
                <Form.Control
                    type="password"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input"
                />
            </Form.Group>
            <Button variant="success" type="submit" className="submit-button">Registrarse</Button>
        </Form>
    );
};

export default Formulario;
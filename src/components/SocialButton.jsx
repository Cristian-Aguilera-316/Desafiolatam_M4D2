// SocialButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';

const SocialButton = ({ icon }) => {
    const icons = {
        facebook: faFacebook,
        github: faGithub,
        linkedin: faLinkedin,
    };

    return (
        <Button variant="light">
            <FontAwesomeIcon icon={icons[icon]} size="2x" />
        </Button>
    );
};

export default SocialButton;
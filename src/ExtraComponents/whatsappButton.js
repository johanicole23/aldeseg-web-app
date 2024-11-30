import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { phoneNumber } from '../assets/data';
import button from '../Styles/button';
import WhatsAppImage from '../assets/images/whatsapp.png';

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button style={button.buttonWtsp}>
        <img src= {WhatsAppImage} alt='whatsapp' />
      </button>
    </a>
  );
};

export default WhatsAppButton;
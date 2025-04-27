import React from 'react';

const phoneNumber = "+1 (878) 879-6315";
const telLink = phoneNumber.replace(/[^+\d]/g, '');

const CallButton: React.FC = () => {
    return (
      <a href={`tel:${telLink}`} style={{ textDecoration: 'none', color: 'black', fontSize: '30px', marginLeft: '20px' }}>
        <button type="button">
          Call {phoneNumber}
        </button>
      </a>
    );
  };

export default CallButton;

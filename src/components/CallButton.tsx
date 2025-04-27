import React from 'react';
import Image from 'next/image';

const phoneNumber = "+1 (878) 879-6315";
const telLink = phoneNumber.replace(/[^+\d]/g, '');

const CallButton: React.FC = () => {
    return (
      <a href={`tel:${telLink}`} style={{ textDecoration: 'none', color: 'black', fontSize: '30px', marginLeft: '20px' }}>
        
        <button type="button" className='max-sm:text-base flex flex-row hover:text-blue transition-colors duration-200 cursor-pointer items-center'>
          
          <Image className="h-auto w-auto max-w-full rounded-lg mx-auto my-4 hover:bg-blue-500" src="/phone.png" alt="map" width={40} height={40} />
          {phoneNumber}
        </button>
      </a>
    );
  };

export default CallButton;

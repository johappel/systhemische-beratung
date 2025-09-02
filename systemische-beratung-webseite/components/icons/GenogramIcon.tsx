import React from 'react';

const GenogramIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hellgruen" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 100-8 4 4 0 000 8zM4 12a4 4 0 100-8 4 4 0 000 8zM20 12a4 4 0 100-8 4 4 0 000 8z" transform="translate(0, 10)" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 11-8 0 4 4 0 018 0z" transform="translate(4, -2)" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 11-8 0 4 4 0 018 0z" transform="translate(-4, -2)" />
  </svg>
);

export default GenogramIcon;
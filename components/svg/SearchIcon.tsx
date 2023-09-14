import React from 'react';

interface SearchIconProps {
  className?: string;
}

function SearchIcon({ className }: SearchIconProps) {
  return (
    <svg
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='Search'>
        <path
          id='Vector'
          d='M8.14567 14.875C11.8621 14.875 14.8748 11.8622 14.8748 8.14582C14.8748 4.42941 11.8621 1.41666 8.14567 1.41666C4.42925 1.41666 1.4165 4.42941 1.4165 8.14582C1.4165 11.8622 4.42925 14.875 8.14567 14.875Z'
          stroke='#C8C2BE'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M15.5832 15.5833L14.1665 14.1667'
          stroke='#C8C2BE'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
}

export default SearchIcon;

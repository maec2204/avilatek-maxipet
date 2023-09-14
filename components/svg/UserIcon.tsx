import React from 'react';

interface UserIconProps {
  className?: string;
}

function UserIcon({ className }: UserIconProps) {
  return (
    <svg
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g id='User'>
        <g id='User_2'>
          <path
            id='Vector'
            d='M13.0917 14.4133C12.505 14.5867 11.8117 14.6667 10.9984 14.6667H6.99836C6.18503 14.6667 5.4917 14.5867 4.90503 14.4133C5.0517 12.68 6.8317 11.3133 8.99836 11.3133C11.165 11.3133 12.945 12.68 13.0917 14.4133Z'
            stroke='#333333'
            strokeWidth='0.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_2'
            d='M10.9982 1.33334H6.99821C3.66488 1.33334 2.33154 2.66668 2.33154 6.00001V10C2.33154 12.52 3.09154 13.9 4.90488 14.4133C5.05154 12.68 6.83154 11.3133 8.99821 11.3133C11.1649 11.3133 12.9449 12.68 13.0915 14.4133C14.9049 13.9 15.6649 12.52 15.6649 10V6.00001C15.6649 2.66668 14.3315 1.33334 10.9982 1.33334ZM8.99821 9.44667C7.67821 9.44667 6.61154 8.37335 6.61154 7.05335C6.61154 5.73335 7.67821 4.66668 8.99821 4.66668C10.3182 4.66668 11.3849 5.73335 11.3849 7.05335C11.3849 8.37335 10.3182 9.44667 8.99821 9.44667Z'
            stroke='#333333'
            strokeWidth='0.6'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
}

export default UserIcon;

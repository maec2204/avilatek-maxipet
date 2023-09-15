import React from 'react';

interface FramerIconProps {
  className?: string;
}

function FramerIcon({ className }: FramerIconProps) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M7.91683 3.75L5.00016 6.66667L2.0835 3.75"
          stroke="#F8F5F3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default FramerIcon;

import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
}

function SectionWrapper({ children }: SectionWrapperProps) {
  return <div className='px-36 w-full h-full'>{children}</div>;
}

export default SectionWrapper;

import React from 'react'

interface TopBarProps {
  logo: React.ReactNode | string;
}

const TopBar: React.FC<TopBarProps> = ({ logo }) => {
  return (
    <nav className="flex justify-between items-center">
      <div></div>      
      {logo}      
      <div></div>
    </nav>
  );
}

export default TopBar
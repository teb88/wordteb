import React from 'react';

interface TopBarProps {
  logo: React.ReactNode | string;
  right?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ logo, right }) => {
  return (
    <nav className="flex justify-between items-center">
      <div></div>
      {logo}
      {right || <div></div>}
    </nav>
  );
};

export default TopBar;

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  background: #1e1a39;
  color: #e0e0e0;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  img {
    height: 30px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavButton = styled.button`
  background: #6c5dd3;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: #5a4aba;
  }
`;

const NavLink = styled.button`
  color: #ccc;
  transition: color 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    color: #fff;
  }
`;

const MobileMenuButton = styled.button`
  color: #ccc;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fff;
  }
`;

const MobileMenu = styled.div`
  padding: 1rem 2rem;
  background: #1e1a39;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileMenuItem = styled.button`
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  color: #ccc;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`;

const MobileMenuConnectButton = styled.button`
  width: 100%;
  background: #6c5dd3;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: #5a4aba;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Games', href: '/games' },
    { name: 'Leaderboard', href: '/leaderboard' },
  ];

  return (
    <NavContainer>
      <NavContent>
        <Logo>
          <img src="logo.svg" alt="Logo" />
          AI Arena
        </Logo>
        
        <NavLinks className="hidden md:flex">
          {navigation.map((item) => (
            <NavLink key={item.name} onClick={() => navigate(item.href)}>
              {item.name}
            </NavLink>
          ))}
          <NavButton onClick={() => navigate('/connect-wallet')}>Connect Wallet</NavButton>
        </NavLinks>

        <MobileMenuButton className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContent>

      {isOpen && (
        <MobileMenu>
          {navigation.map((item) => (
            <MobileMenuItem
              key={item.name}
              onClick={() => {
                navigate(item.href);
                setIsOpen(false);
              }}
            >
              {item.name}
            </MobileMenuItem>
          ))}
          <MobileMenuConnectButton onClick={() => navigate('/connect-wallet')}>Connect Wallet</MobileMenuConnectButton>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;

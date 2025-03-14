import { Github, Twitter, MessageCircle } from 'lucide-react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  padding: 4rem 0;
  color: #e0e0e0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #fff;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  a {
    color: #ccc;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    text-decoration: none;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: #ccc;
    opacity: 0.8;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      opacity: 1;
      transform: translateY(-3px);
    }
  }
`;

const NetworkBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  img {
    height: 28px;
  }
  
  span {
    font-weight: 600;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Explore</h3>
          <QuickLinks>
            <a href="/about">About Us</a>
            <a href="/faq">FAQ</a>
            <a href="/support">Support</a>
            <a href="/terms">Terms & Conditions</a>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Connect</h3>
          <SocialLinks>
            <a href="https://discord.gg/your-server" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={28} />
            </a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
              <Twitter size={28} />
            </a>
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <Github size={28} />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Powered By</h3>
          <NetworkBranding>
            <span>AI Arena Network</span>
          </NetworkBranding>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

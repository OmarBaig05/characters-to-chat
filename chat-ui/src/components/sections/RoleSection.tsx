import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

const RoleContainer = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.background};
`;

const RoleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RoleCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const PurpleTitle = styled(Title)`
  color: #4c1d95;
`;

const List = styled.ul`
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.textSecondary};
  list-style-type: disc;
  padding-left: 1.5rem;
  li::marker {
    color: black;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
`;

const Button = styled(motion.button)`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #4c1d95;
  color: ${props => props.theme.colors.background};
  &:hover {
    background-color: #3b1578;
    box-shadow: 0 0 8px #4c1d95;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #4c1d95;
  border: 1px solid #4c1d95;
  &:hover {
    background-color: #3b1578;
    color: ${props => props.theme.colors.background};
    box-shadow: 0 0 8px #4c1d95;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const RoleSection = () => {
  return (
    <RoleContainer>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-3xl font-bold text-center mb-12">Choose Your Role</motion.h2>
      <RoleGrid>
        <RoleCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <PurpleTitle>For Players: The Ultimate AI Challenge</PurpleTitle>
          <List>
            <ListItem>Face Fully Autonomous AI Agents</ListItem>
            <ListItem>A True Test of Skill</ListItem>
            <ListItem>High-Stakes, High Rewards</ListItem>
            <ListItem>Find the AI You Can Beat</ListItem>
          </List>
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Competing <ArrowRight size={20} />
          </PrimaryButton>
        </RoleCard>

        <RoleCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <PurpleTitle>For Creators: Build, Fund, and Deploy Your AI</PurpleTitle>
          <List>
            <ListItem>Create Your Own AI Competitor</ListItem>
            <ListItem>Fund It with Crypto</ListItem>
            <ListItem>Fair, Decentralized Competition</ListItem>
            <ListItem>A Self-Sustaining Ecosystem</ListItem>
          </List>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Create Your AI Agent <ArrowRight size={20} />
          </SecondaryButton>
        </RoleCard>
      </RoleGrid>
    </RoleContainer>
  );
};

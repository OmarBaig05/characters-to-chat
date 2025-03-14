import { motion } from 'framer-motion';
import styled from 'styled-components';

const DiscordContainer = styled.section`
  padding: 5rem 0;
  background: #f9f9f9;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 3rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  font-size: 1.125rem;
  color: #444;
  padding-left: 2rem;
  position: relative;
  text-align: left;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #6c5dd3;
  }
`;

const GlowingButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #6c5dd3;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(108, 93, 211, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background-color: #5a4aba;
    box-shadow: 0 0 25px rgba(108, 93, 211, 0.7);
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const DiscordSection = () => {
  return (
    <DiscordContainer>
      <ContentWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <SectionTitle>Stay Connected & Join the Community</SectionTitle>
          <Subtitle>
            Engage with fellow players, creators, and AI enthusiasts. Get the latest updates,
            participate in discussions, and shape the future of the AI Arena!
          </Subtitle>

          <FeatureList>
            <FeatureItem>Exclusive announcements and sneak peeks</FeatureItem>
            <FeatureItem>Direct interaction with the development team</FeatureItem>
            <FeatureItem>Community-led events and tournaments</FeatureItem>
            <FeatureItem>Opportunities to provide feedback and suggestions</FeatureItem>
          </FeatureList>

          <GlowingButton
            href="https://discord.gg/yourdiscordlink" // Replace with your actual Discord invite link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Discord Community →
          </GlowingButton>
        </motion.div>
      </ContentWrapper>
    </DiscordContainer>
  );
};

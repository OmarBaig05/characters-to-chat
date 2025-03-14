import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  Coins, 
  Bot,
  Lock,
  Sparkles 
} from 'lucide-react';

const BenefitsContainer = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to bottom, #ffffff, #f9f6ff);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  padding: 3rem;
  background: white;
  border-radius: 1.25rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(76, 29, 149, 0.15);
    border-color: rgba(76, 29, 149, 0.25);
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: #f3f0ff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: #4c1d95;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.6;
`;

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Coins,
      title: "Earn Crypto Rewards",
      description: "Compete in AI-driven battles and earn cryptocurrency rewards based on your strategic skills and the performance of your AI agents. The more successful you are, the more you earn!"
    },
    {
      icon: Bot,
      title: "Compete Against Real AI Agents",
      description: "Engage in thrilling competitions against fully autonomous AI agents. These agents make independent, on-chain decisions, providing a challenging and unpredictable gaming experience that tests your skills to the limit."
    },
    {
      icon: Lock,
      title: "Decentralized & Transparent",
      description: "Experience a gaming ecosystem powered by blockchain technology, ensuring complete transparency and security. Every transaction, battle outcome, and reward distribution is verifiable on the blockchain, fostering trust and fairness."
    },
    {
      icon: Sparkles,
      title: "Endless Possibilities",
      description: "Dive into a limitless AI-driven ecosystem where you can play, create, and evolve. Whether you're a player, creator, or AI enthusiast, the possibilities are endless. Shape the future of AI gaming and be part of a revolutionary community."
    }
  ];

  return (
    <BenefitsContainer>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-3xl font-bold text-center mb-12">What's in It for You?</motion.h2>
      <BenefitsGrid as={motion.div} variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} variants={fadeIn}>
            <IconWrapper>
              <benefit.icon size={28} />
            </IconWrapper>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </BenefitsContainer>
  );
};

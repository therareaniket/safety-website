'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type SignalCard = {
  title: string;
  desc: string;
  img: string;
};

type DraggableCardProps = {
  card: SignalCard;
  index: number;
  activeIndex: number;
  totalCards: number;
  onThrow: (index: number) => void;
};


export default function AboutSignalManagement() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [visibleCards, setVisibleCards] = useState<SignalCard[]>([
    {
      title: 'Signal Detection and Prioritization',
      desc: 'Continuously identify potential safety signals across cases, reports, and data trends, and prioritize them based on clinical relevance, impact, and regulatory risk.',
      img: '/images/aboutpage/signal-detection-card.webp',
    },
    {
      title: 'Signal Lifecycle Documentation',
      desc: 'Maintain structured documentation for every stage of the signal lifecycle from detection and evaluation to decision and closure ensuring audit readiness.',
      img: '/images/aboutpage/signal-lifecycle-card.webp',
    },
    {
      title: 'Linkage to Cases and Reports',
      desc: 'Establish direct traceability between signals, individual cases, and aggregate reports, enabling consistent evaluations and evidence-based decision making.',
      img: '/images/aboutpage/linkage-to-cases-card.webp',
    },
    {
      title: 'SLA and Compliance Monitoring',
      desc: 'Track timelines, workload, and compliance metrics against defined SLAs, with early visibility into risks, delays, and regulatory commitments.',
      img: '/images/aboutpage/sla-compliance-card.webp',
    },
  ]);


  const handleThrow = (thrownIndex: number) => {
    setVisibleCards((prev: SignalCard[]) => {
      const updated = [...prev];
      const removed = updated.splice(thrownIndex, 1)[0];
      updated.push(removed);
      return updated;
    });

    setActiveIndex(0);
  };

  return (
    <section className="section about-signal-management-section">
      <div className="container">
        <div className="about-signal-management-inner">

          {/* Title */}
          <div className="about-signal-management-content">
            <h2 className="about-signal-management-title text-md">
              Signal Management & Safety Oversight
            </h2>
            <p className="about-signal-management-para text-rg h6">
              Proactively identify, assess, and monitor safety risks with full visibility,
              traceability, and operational control.
            </p>
          </div>

          <div className="about-signal-management-cards-wrapper stack-container">
            <motion.div
              className="stack"
              style={{
                position: 'relative',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {visibleCards.map((card, index) => (
                <ClickableCard
                  key={`${card.title}-${index}`}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={visibleCards.length}
                  onThrow={handleThrow}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

const ClickableCard = ({
  card,
  index,
  activeIndex,
  totalCards,
  onThrow,
}: DraggableCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isThrowing, setIsThrowing] = useState<boolean>(false);

  const [throwDir, setThrowDir] = useState({
    x: 0,
    y: 0,
    rotate: 0,
  });

  const isActive = index === activeIndex;

  const triggerThrow = () => {
    if (!isActive) return;

    const randomX = Math.random() > 0.5 ? 600 : -600; 
    const randomY = Math.random() * 200 - 100; 
    const randomRotate = Math.random() * 40 - 20; 

    setThrowDir({
      x: randomX,
      y: randomY,
      rotate: randomRotate,
    });

    setIsThrowing(true);

    setTimeout(() => {
      onThrow(index);
      setIsThrowing(false);
    }, 350);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`about-signal-management-cards ${
        isActive ? '' : 'about-signal-management-cards-reverse'
      }`}
      style={{
        position: 'absolute',
        top: 0,
        transform: 'translateX(-50%)',
        cursor: isActive ? 'pointer' : 'default',
        width: '100%',
        maxWidth: '1200px',
      }}
      initial={{ y: 0, scale: 0.9, opacity: 0.5 }}
      animate={{
        x: isThrowing ? throwDir.x : 0,
        y: isThrowing ? throwDir.y : isActive ? 0 : 20 * index,
        scale: isThrowing ? 0.8 : isActive ? 1 : 0.96 - index * 0.02,
        opacity: isThrowing ? 0 : isActive ? 1 : 0.7 - index * 0.1,
        rotate: isThrowing ? throwDir.rotate : isActive ? 0 : index * 0.5,
        zIndex: totalCards - index,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 22,
      }}
      onClick={triggerThrow}
    >
      <div className="signal-management-text-left">
        <h3 className="signal-management-card-title h4 text-md">
          {card.title}
        </h3>
        <p className="signal-management-card-para h6 text-rg text-grey">
          {card.desc}
        </p>
      </div>

      <div className="signal-management-right">
        <Image
          src={card.img}
          alt={card.title}
          width={545}
          height={327}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </motion.div>
  );
};


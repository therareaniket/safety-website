'use client';

import { useState, useRef, useEffect } from 'react';
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
  throwSignal: number;
  direction: 'left' | 'right' | null;
  onThrowComplete: (index: number) => void;
};

export default function AboutSignalManagement() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [throwSignal, setThrowSignal] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

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

  const handleThrowComplete = (thrownIndex: number) => {
    setVisibleCards(prev => {
      const updated = [...prev];
      const removed = updated.splice(thrownIndex, 1)[0];
      updated.push(removed);
      return updated;
    });

    setActiveIndex(0);
    setDirection(null);
  };

  const triggerArrowThrow = (dir: 'left' | 'right') => {
    setDirection(dir);
    setThrowSignal(prev => prev + 1);
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

          {/* Cards */}
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
            >
              {visibleCards.map((card, index) => (
                <ClickableCard
                  key={`${card.title}-${index}`}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={visibleCards.length}
                  throwSignal={throwSignal}
                  direction={direction}
                  onThrowComplete={handleThrowComplete}
                />
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <div className="signal-management-arrows">
            <div
              className="signal-management-arrow-left"
              onClick={() => triggerArrowThrow('left')}
            >
              <svg className='arrow-svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0)" fill="#C7B0D8" />
                <path d="M21.9893 14.0001C22.5415 13.9941 22.994 14.437 22.9999 14.9893C23.0059 15.5415 22.563 15.994 22.0107 15.9999L22 15L21.9893 14.0001ZM6.30138 15.8756C5.90669 15.4893 5.8999 14.8562 6.28621 14.4615L12.5815 8.02959C12.9678 7.63489 13.601 7.6281 13.9957 8.01441C14.3903 8.40072 14.3971 9.03385 14.0108 9.42854L8.415 15.1458L14.1322 20.7416C14.5269 21.1279 14.5337 21.761 14.1474 22.1557C13.7611 22.5504 13.128 22.5572 12.7333 22.1709L6.30138 15.8756ZM22 15L22.0107 15.9999L7.01159 16.1609L7.00086 15.1609L6.99013 14.161L21.9893 14.0001L22 15Z" fill="white" />
              </svg>
            </div>

            <div
              className="signal-management-arrow-right"
              onClick={() => triggerArrowThrow('right')}
            >
              <svg className='arrow-svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" rx="15" fill="#C7B0D8" />
                <path className='signal-arrows'  d="M8.01073 14.0001C7.45848 13.9941 7.00598 14.437 7.00006 14.9893C6.99413 15.5415 7.43702 15.994 7.98927 15.9999L8 15L8.01073 14.0001ZM23.6986 15.8756C24.0933 15.4893 24.1001 14.8562 23.7138 14.4615L17.4185 8.02959C17.0322 7.63489 16.399 7.6281 16.0043 8.01441C15.6097 8.40072 15.6029 9.03385 15.9892 9.42854L21.585 15.1458L15.8678 20.7416C15.4731 21.1279 15.4663 21.761 15.8526 22.1557C16.2389 22.5504 16.872 22.5572 17.2667 22.1709L23.6986 15.8756ZM8 15L7.98927 15.9999L22.9884 16.1609L22.9991 15.1609L23.0099 14.161L8.01073 14.0001L8 15Z" fill="white" />
              </svg>

            </div>
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
  throwSignal,
  direction,
  onThrowComplete,
}: DraggableCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isThrowing, setIsThrowing] = useState(false);

  const isActive = index === activeIndex;

useEffect(() => {
  if (!isActive || !direction) return;

  const timer = setTimeout(() => {
    setIsThrowing(true);

    setTimeout(() => {
      onThrowComplete(index);
      setIsThrowing(false);
    }, 350);

  }, 0);

  return () => clearTimeout(timer);
}, [throwSignal]);

  const throwX = direction === 'right' ? 700 : -700;
  const throwRotate = direction === 'right' ? 25 : -25;

  return (
    <motion.div
      ref={cardRef}
      className={`about-signal-management-cards ${isActive ? '' : 'about-signal-management-cards-reverse'
        }`}
      style={{
        position: 'absolute',
        top: 0,
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1200px',
      }}
      initial={{ y: 0, scale: 0.9, opacity: 0.5 }}
      animate={{
        x: isThrowing ? throwX : 0,
        y: isThrowing ? 0 : isActive ? 0 : 20 * index,
        scale: isThrowing ? 0.8 : isActive ? 1 : 0.96 - index * 0.02,
        opacity: isThrowing ? 0 : isActive ? 1 : 0.7 - index * 0.1,
        rotate: isThrowing ? throwRotate : isActive ? 0 : index * 0.5,
        zIndex: totalCards - index,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 22,
      }}
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

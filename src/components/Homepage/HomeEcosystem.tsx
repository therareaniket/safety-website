'use client';

import Image from "next/image";
import { motion, TargetAndTransition } from "framer-motion";
import { useEffect, useState } from "react";

type EcoAnimations = {
  top_initial?: TargetAndTransition;
  top_animate?: TargetAndTransition;
  bottom_initial?: TargetAndTransition;
  bottom_animate?: TargetAndTransition;
  left_initial?: TargetAndTransition;
  left_animate?: TargetAndTransition;
  viewportAmount: number;
};

export default function HomeEcosystem() {
  const [animations, setAnimations] = useState<EcoAnimations | null>(null);

  useEffect(() => {
    const updateAnimations = () => {
      const isDesktop = window.innerWidth >= 768;

      const config: EcoAnimations = isDesktop
        ? {
            top_initial: { opacity: 0, y: -80 },
            top_animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },

            bottom_initial: { opacity: 0, y: 80 },
            bottom_animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            },

            viewportAmount: 0.6,
          }
        : {
            left_initial: { opacity: 0, x: -80 },
            left_animate: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },

            viewportAmount: 0.4,
          };

      setAnimations(config);
    };

    updateAnimations();
    window.addEventListener("resize", updateAnimations);
    return () => window.removeEventListener("resize", updateAnimations);
  }, []);

  // Prevent SSR mismatch
  if (!animations) return null;

  // Parent container stagger animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="tools-wrapper section eco-system">
      <div className="container">

        <div className="main-title center text-center">
          <h2 className="text-md">
            Supporting Every Corner of the Safety Ecosystem
          </h2>
          <p className="h6">
            Built for medical teams, regulatory units, researchers, and organizations.
          </p>
        </div>

        <motion.div
          className="eco-row flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: animations.viewportAmount }}
        >

          {/* 1 */}
          <motion.div
            className="eco-item"
            variants={{
              hidden: animations.top_initial ?? animations.left_initial ?? { opacity: 0 },
              visible: animations.top_animate ?? animations.left_animate ?? { opacity: 1 },
            }}
          >
            <div className="eco-img">
              <Image
                className="ec-img"
                src="/images/homepage/sponsor.webp"
                alt="Clinical Sponsors"
                width={336}
                height={413}
                priority
              />
            </div>
            <div className="eco-title">
              <h3 className="h5 text-md">Clinical Sponsors</h3>
              <p className="text-18">
                Use to streamline safety data capture, case processing
              </p>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            className="eco-item"
            variants={{
              hidden: animations.top_initial ?? animations.left_initial ?? { opacity: 0 },
              visible: animations.top_animate ?? animations.left_animate ?? { opacity: 1 },
            }}
          >
            <div className="eco-title top">
              <h3 className="h5 text-md">CROs</h3>
              <p className="text-18">
                Depend for efficiently manage safety operations for multiple clients
              </p>
            </div>
            <div className="eco-img">
              <Image
                className="ec-img"
                src="/images/homepage/cros.webp"
                alt="CROs"
                width={336}
                height={413}
                priority
              />
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            className="eco-item"
            variants={{
              hidden: animations.top_initial ?? animations.left_initial ?? { opacity: 0 },
              visible: animations.top_animate ?? animations.left_animate ?? { opacity: 1 },
            }}
          >
            <div className="eco-img">
              <Image
                className="ec-img"
                src="/images/homepage/pharma.webp"
                alt="Pharma & Biotech"
                width={336}
                height={413}
                priority
              />
            </div>
            <div className="eco-title">
              <h3 className="h5 text-md">Pharma</h3>
              <p className="text-18">
                To unify case manage, evaluate emerging safety signals, and meet global
              </p>
            </div>
          </motion.div>

          {/* 4 */}
          <motion.div
            className="eco-item"
            variants={{
              hidden: animations.top_initial ?? animations.left_initial ?? { opacity: 0 },
              visible: animations.top_animate ?? animations.left_animate ?? { opacity: 1 },
            }}
          >
            <div className="eco-title top">
              <h3 className="h5 text-md">MAHs</h3>
              <p className="text-18">
                Marketing Authorization Holders rely to manage
              </p>
            </div>
            <div className="eco-img">
              <Image
                className="ec-img"
                src="/images/homepage/mahs.webp"
                alt="MAHs"
                width={336}
                height={413}
                priority
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

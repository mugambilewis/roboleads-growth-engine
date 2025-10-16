import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

/**
 * Integrations Component
 * 
 * A single-viewport animated visualization of integration cards
 * with orbital motion, connector lines, and parallax effects.
 * 
 * Tuning Parameters:
 * - ORBIT_RADIUS: Base radius for card orbit (line 18)
 * - ENTRANCE_DURATION: Stagger timing for card entrance (line 21)
 * - ORBIT_DURATION: Speed of orbital motion (line 24)
 * - PULSE_DURATION: Speed of node pulsing (line 27)
 * - PARALLAX_STRENGTH: Pointer parallax sensitivity (line 30)
 */

// TUNING: Adjust orbital motion radius
const ORBIT_RADIUS = 180;

// TUNING: Adjust entrance animation timing
const ENTRANCE_DURATION = 0.6;
const STAGGER_DELAY = 0.08;

// TUNING: Adjust orbital motion speed
const ORBIT_DURATION = 20;

// TUNING: Adjust pulse animation speed
const PULSE_DURATION = 2;

// TUNING: Adjust parallax movement strength
const PARALLAX_STRENGTH = 20;

interface Integration {
  id: number;
  label: string;
  angle: number;
  orbitRadius: number;
  phase: number;
}

// Three orbital rings expanding from center
const integrations: Integration[] = [
  // Inner orbit - 3 cards
  { id: 1, label: 'Slack', angle: 0, orbitRadius: ORBIT_RADIUS * 0.5, phase: 0 },
  { id: 2, label: 'GitHub', angle: 120, orbitRadius: ORBIT_RADIUS * 0.5, phase: 0 },
  { id: 3, label: 'Figma', angle: 240, orbitRadius: ORBIT_RADIUS * 0.5, phase: 0 },
  
  // Middle orbit - 4 cards
  { id: 4, label: 'Notion', angle: 0, orbitRadius: ORBIT_RADIUS, phase: 0 },
  { id: 5, label: 'Jira', angle: 90, orbitRadius: ORBIT_RADIUS, phase: 0 },
  { id: 6, label: 'Stripe', angle: 180, orbitRadius: ORBIT_RADIUS, phase: 0 },
  { id: 7, label: 'Zoom', angle: 270, orbitRadius: ORBIT_RADIUS, phase: 0 },
  
  // Outer orbit - 3 cards
  { id: 8, label: 'Salesforce', angle: 60, orbitRadius: ORBIT_RADIUS * 1.5, phase: 0 },
  { id: 9, label: 'Asana', angle: 180, orbitRadius: ORBIT_RADIUS * 1.5, phase: 0 },
  { id: 10, label: 'Teams', angle: 300, orbitRadius: ORBIT_RADIUS * 1.5, phase: 0 },
];

const Integrations = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Pointer tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-PARALLAX_STRENGTH, PARALLAX_STRENGTH]), {
    stiffness: 150,
    damping: 30,
  });
  const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-PARALLAX_STRENGTH, PARALLAX_STRENGTH]), {
    stiffness: 150,
    damping: 30,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  // Calculate positions for cards on perfect circular orbits
  const getCardPosition = (integration: Integration, time: number) => {
    // Rotate cards around their orbit
    const orbitAngle = integration.angle + (time * 360) / ORBIT_DURATION;
    const radians = (orbitAngle * Math.PI) / 180;
    const scale = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.6 : 1;
    const radius = integration.orbitRadius * scale;
    
    return {
      x: centerX + Math.cos(radians) * radius,
      y: centerY + Math.sin(radians) * radius,
    };
  };

  return (
    <section
      role="region"
      aria-label="Integrations section"
      className="relative overflow-hidden"
      style={{
        // Enforce strict color palette via CSS variables
        '--bg': '#092C5D',
        '--accent': '#00B3A4',
        '--text': '#FFFFFF',
        backgroundColor: 'var(--bg)',
        height: '100vh',
        maxHeight: '100vh',
      } as React.CSSProperties}
      ref={containerRef}
      onPointerMove={handlePointerMove}
    >
			<h2 className="section-title text-light-tile">Get unified visibility into your entire cloud infrastructure</h2>
      {/* Background gradient overlay for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 179, 164, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Main content container with parallax */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        {/* SVG Orbit Circles and Connector Lines */}
        <svg
          className="absolute"
          width={dimensions.width}
          height={dimensions.height}
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Draw perfect circular orbit paths */}
          {[0.5, 1, 1.5].map((radiusMultiplier, idx) => {
            const scale = typeof window !== 'undefined' && window.innerWidth < 768 ? 0.6 : 1;
            const radius = ORBIT_RADIUS * radiusMultiplier * scale;
            
            return (
              <motion.circle
                key={`orbit-${idx}`}
                cx={centerX}
                cy={centerY}
                r={radius}
                stroke="var(--accent)"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
                initial={{ r: 0, opacity: 0 }}
                animate={{ r: radius, opacity: 0.2 }}
                transition={{
                  duration: 1.2,
                  delay: idx * 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              />
            );
          })}

          {/* Draw connector lines between cards on the same orbit */}
          {[
            integrations.filter(i => i.orbitRadius === ORBIT_RADIUS * 0.5),
            integrations.filter(i => i.orbitRadius === ORBIT_RADIUS),
            integrations.filter(i => i.orbitRadius === ORBIT_RADIUS * 1.5),
          ].map((orbitCards, orbitIdx) => 
            orbitCards.map((integration, idx) => {
              const nextIntegration = orbitCards[(idx + 1) % orbitCards.length];
              const pos1 = getCardPosition(integration, 0);
              const pos2 = getCardPosition(nextIntegration, 0);

              const pathD = `M ${pos1.x} ${pos1.y} A ${integration.orbitRadius} ${integration.orbitRadius} 0 0 1 ${pos2.x} ${pos2.y}`;
              const pathLength = (2 * Math.PI * integration.orbitRadius) / orbitCards.length;

              return (
                <motion.path
                  key={`connector-${integration.id}-${nextIntegration.id}`}
                  d={pathD}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#glow)"
                  initial={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                    opacity: 0.4,
                  }}
                  animate={{
                    strokeDashoffset: 0,
                    opacity: 0.4,
                  }}
                  whileHover={{
                    opacity: 0.8,
                  }}
                  transition={{
                    strokeDashoffset: {
                      duration: 1.5,
                      delay: orbitIdx * 0.3 + idx * 0.1 + 0.5,
                      ease: 'easeOut',
                    },
                    opacity: {
                      duration: 0.3,
                    },
                  }}
                />
              );
            })
          )}
        </svg>

        {/* Integration Cards */}
        <motion.div
          className="relative"
          style={{ width: dimensions.width, height: dimensions.height }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: STAGGER_DELAY,
              },
            },
          }}
        >
          {integrations.map((integration, idx) => (
            <IntegrationCard
              key={integration.id}
              integration={integration}
              index={idx}
              getPosition={(time) => getCardPosition(integration, time)}
            />
          ))}
        </motion.div>

        {/* Center focal point */}
        <motion.div
          className="absolute"
          style={{
            left: centerX - 6,
            top: centerY - 6,
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 20px var(--accent)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        />
      </motion.div>
    </section>
  );
};

interface IntegrationCardProps {
  integration: Integration;
  index: number;
  getPosition: (time: number) => { x: number; y: number };
}

const IntegrationCard = ({ integration, index, getPosition }: IntegrationCardProps) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      setTime(elapsed);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const position = getPosition(time);

  return (
    <motion.div
      className="absolute focus:outline-white focus:outline-offset-2 focus:outline-[3px] rounded-2xl cursor-pointer"
      style={{
        left: position.x,
        top: position.y,
        x: '-50%',
        y: '-50%',
      }}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: ENTRANCE_DURATION,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like easing with overshoot
        scale: { duration: 0.2 },
      }}
      tabIndex={0}
      role="button"
      aria-label={`${integration.label} integration`}
    >
      <div
        className="relative px-4 py-3 rounded-2xl backdrop-blur-sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Card Label */}
        <span
          className="text-sm font-medium whitespace-nowrap"
          style={{ color: 'var(--text)' }}
        >
          {integration.label}
        </span>

        {/* Pulsing Accent Node */}
        <motion.div
          className="absolute -top-1 -right-1 rounded-full"
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'var(--accent)',
            boxShadow: '0 0 10px var(--accent)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: PULSE_DURATION,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: integration.phase,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Integrations;

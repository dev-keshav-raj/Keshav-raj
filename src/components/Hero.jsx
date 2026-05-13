import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '4rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', flex: 1 }}
        >
          <motion.div variants={itemVariants}>
            <span style={{ color: 'var(--accent-tertiary)', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Hello, I am
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, fontWeight: 900 }}>
            <span className="text-gradient">KESHAV RAJ</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', fontWeight: 400 }}>
            Mobile App Developer (Android, iOS & Flutter)
          </motion.h2>

          <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Building scalable, user-centric mobile apps with Kotlin, Dart, and Swift.
            Passionate about beautiful UI, high performance, and smooth animations.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <SocialLink href="https://github.com/dev-keshav-raj" icon={<FaGithub size={24} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/dev-keshav" icon={<FaLinkedin size={24} />} label="LinkedIn" />
            <SocialLink href="mailto:buildwithkeshav@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="tel:+917292870631" icon={<Phone />} label="Call" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '250px' }}
        >
          <img 
            src="/profile.jpeg" 
            alt="Keshav Raj" 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              borderRadius: '30%', 
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)', 
              border: '4px solid rgba(255, 255, 255, 0.1)',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)'
            }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card"
      whileHover={{ scale: 1.1, y: -5, borderColor: 'var(--accent-primary)' }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontWeight: 600,
        transition: 'border-color 0.3s ease',
      }}
    >
      {icon}
      <span>{label}</span>
    </motion.a>
  );
};

export default Hero;

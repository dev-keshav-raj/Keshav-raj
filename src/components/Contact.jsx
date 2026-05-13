import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ paddingBottom: '10rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{ 
            padding: '4rem 2rem', 
            textAlign: 'center',
            background: 'linear-gradient(180deg, var(--glass-bg) 0%, rgba(139, 92, 246, 0.1) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Animated Background Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-100px',
              left: '-100px',
              width: '200px',
              height: '200px',
              borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
              background: 'var(--accent-primary)',
              filter: 'blur(60px)',
              opacity: 0.3,
              zIndex: 0
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 800 }}>
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
              Currently seeking a full-time role to contribute to scalable, user-centric mobile applications. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.a 
              href="mailto:buildwithkeshav@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'var(--text-primary)',
                color: 'var(--bg-color)',
                padding: '1rem 2.5rem',
                borderRadius: '30px',
                fontSize: '1.2rem',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(255,255,255,0.2)',
              }}
            >
              <Mail size={24} />
              Say Hello
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

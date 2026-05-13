import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative background circle */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'var(--accent-secondary)',
              filter: 'blur(50px)',
              opacity: 0.3,
              zIndex: 0
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                I am a passionate Android, iOS, and Flutter Developer skilled in Kotlin, Dart, and Swift.
                My expertise lies in building cross-platform mobile app development and deploying production-grade apps on the Play Store.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                I have hands-on experience developing apps spanning finance, PG management, RTSP streaming, and AI-powered games.
                My tech arsenal includes Jetpack Compose, Firebase, Supabase, Room DB, ExoPlayer, and advanced state management in Flutter.
                I am actively seeking a full-time role to build scalable, user-centric mobile apps.
              </p>
            </div>

            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <EducationCard
                title="Master of Computer Applications"
                institution="Sikkim Manipal Institute of Technology"
                period="2024 - 2026"
              />
              <EducationCard
                title="Bachelor of Computer Applications"
                institution="Patliputra University, Patna"
                period="2021 - 2024 (75%)"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EducationCard = ({ title, institution, period }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      style={{
        padding: '1.5rem',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>{institution}</p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{period}</p>
    </motion.div>
  );
};

export default About;

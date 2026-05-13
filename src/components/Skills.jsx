import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Languages', items: ['Kotlin', 'Dart', 'Java', 'Python', 'Swift'], color: 'var(--accent-primary)' },
  { category: 'Frameworks', items: ['Jetpack Compose', 'Flutter', 'KMP'], color: 'var(--accent-secondary)' },
  { category: 'Databases', items: ['Room', 'SQLite', 'Supabase', 'Mongo DB'], color: 'var(--accent-tertiary)' },
  { category: 'Tools', items: ['Android Studio', 'Xcode', 'Git', 'Figma'], color: '#f59e0b' },
  { category: 'Concepts', items: ['MVVM', 'State Management', 'Coroutines', 'DSA', 'REST APIs', 'Bloc'], color: '#3b82f6' },
  { category: 'Platforms', items: ['Android', 'iOS', 'macOS', 'Linux'], color: '#10b981' }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
            <span className="text-gradient">Tech Arsenal</span>
          </h2>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem' 
            }}
          >
            {skillsData.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="glass-card"
                whileHover={{ y: -5, boxShadow: `0 10px 30px -10px ${skillGroup.color}50` }}
                style={{ padding: '2rem', borderTop: `4px solid ${skillGroup.color}` }}
              >
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                  {skillGroup.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {skillGroup.items.map((item, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: skillGroup.color, color: '#fff' }}
                      style={{
                        padding: '0.4rem 1rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        cursor: 'default',
                        transition: 'background-color 0.2s, color 0.2s'
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

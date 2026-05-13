import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Personal Finance Tracker App',
    description: 'Fully offline, privacy-focused budget tracker managing 1000+ monthly transactions with on-device Room Database. Automated monthly breakdowns and PDF report generation reducing manual effort by 80%.',
    tech: ['Kotlin', 'Jetpack Compose', 'Room DB', 'PDF Generation'],
    github: 'https://github.com/dev-keshav-raj/Expense_recorder.git',
    playStore: 'https://play.google.com/store/apps/details?id=com.kr.expenserecoder',
    color: 'var(--accent-primary)',
  },
  {
    title: 'RTSP Streaming App Online',
    description: 'High-performance real-time video streaming app with latency under 300ms using ExoPlayer. Added on-device screen recording, live RTSP feed capture, and Picture-in-Picture mode.',
    tech: ['Kotlin', 'ExoPlayer', 'MediaRecorder', 'Jetpack Compose'],
    github: 'https://github.com/dev-keshav-raj/rtsp_stream',
    playStore: null,
    color: 'var(--accent-secondary)',
  },
  {
    title: 'Call Break Card Game with AI Bot',
    description: 'Multiplayer Call Break with intelligent AI opponent trained on game heuristics. Card engine handles shuffling, scoring, trump selection, and smart move prediction with smooth animations.',
    tech: ['Flutter', 'Dart', 'GetX', 'AI-based logic'],
    github: null,
    playStore: null,
    color: 'var(--accent-tertiary)',
  },
  {
    title: 'CloudNotes',
    description: 'Cross-platform notes app supporting sync across Android and Web. Integrated Firebase Auth, Firestore, and offline caching with auto-login, note search, and real-time updates.',
    tech: ['Flutter', 'Firebase Auth', 'Firestore'],
    github: 'https://github.com/dev-keshav-raj/CloudNotes',
    playStore: null,
    color: '#f59e0b', // Amber
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {projects.map((project, index) => (
              <Tilt 
                key={index} 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={2000}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition="all"
                style={{ height: '100%' }}
              >
                <div className="glass-card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                  
                  {/* Decorative Color Blob */}
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: project.color,
                    filter: 'blur(40px)',
                    opacity: 0.4,
                    zIndex: 0
                  }}></div>

                  <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                      {project.description}
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                      {project.tech.map((t, i) => (
                        <span key={i} style={{ 
                          fontSize: '0.8rem', 
                          padding: '0.3rem 0.8rem', 
                          background: 'rgba(255,255,255,0.05)', 
                          borderRadius: '20px',
                          color: project.color,
                          fontWeight: 500
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = project.color} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.playStore && (
                      <a href={project.playStore} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.color = project.color} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

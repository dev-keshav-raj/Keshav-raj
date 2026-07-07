import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "MindFlow",
    description:
      "AI-powered visual mind mapping platform featuring an infinite zoomable canvas, Riverpod architecture, Gemini AI sentiment analysis, undo/redo timeline, JSON persistence, and a modern glassmorphic UI.",
    tech: [
      "Flutter",
      "Riverpod",
      "Gemini AI",
      "CustomPainter",
      "Material 3",
    ],
    github: "https://github.com/dev-keshav-raj/MindFlow.git",
    playStore: null,
    color: "#8b5cf6",
  },

  {
    title: "ScreenCast",
    description:
      "Cross-platform screen mirroring application that streams macOS displays to Android devices over USB Type-C with a shared Flutter codebase and optimized low-latency rendering.",
    tech: [
      "Flutter",
      "Platform Channels",
      "macOS",
      "Android",
      "USB",
    ],
    github: "https://github.com/dev-keshav-raj/ScreenCast-MAC-Android.git",
    playStore: null,
    color: "#06b6d4",
  },

  {
    title: "Personal Finance Tracker",
    description:
      "Offline-first expense tracking application with Room Database, PDF report generation, automated monthly summaries, and budget management built using Jetpack Compose.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room DB",
      "PDF",
    ],
    github: "https://github.com/dev-keshav-raj/Expense_recorder.git",
    playStore:
      "https://play.google.com/store/apps/details?id=com.kr.expenserecoder",
    color: "var(--accent-primary)",
  },

  {
    title: "RTSP Streaming App",
    description:
      "Low-latency RTSP streaming application supporting CCTV/IP cameras with ExoPlayer, screen recording, Picture-in-Picture, and optimized playback performance.",
    tech: [
      "Kotlin",
      "ExoPlayer",
      "MediaRecorder",
      "Jetpack Compose",
    ],
    github: "https://github.com/dev-keshav-raj/rtsp_stream",
    playStore: null,
    color: "var(--accent-secondary)",
  },

  {
    title: "CloudNotes",
    description:
      "Offline-first note-taking application built with Kotlin using Firebase Authentication, Firestore synchronization, secure user login, and clean Material Design architecture.",
    tech: [
      "Kotlin",
      "Firebase",
      "Firestore",
      "Material Design",
    ],
    github: "https://github.com/dev-keshav-raj/CloudNotes",
    playStore: null,
    color: "#f59e0b",
  },

  {
    title: "Hostel Management App",
    description:
      "Android application for hostel administration featuring student registration, room allocation, complaint management, attendance tracking, and admin dashboard.",
    tech: [
      "Kotlin",
      "Firebase",
      "Android",
      "MVVM",
    ],
    github: "https://github.com/dev-keshav-raj/hostelapplication.git",
    playStore: null,
    color: "#10b981",
  },

  {
    title: "Weather App",
    description:
      "Modern Android weather application providing real-time forecasts, current weather conditions, location-based updates, and intuitive Material UI.",
    tech: [
      "Kotlin",
      "Weather API",
      "Retrofit",
      "Material UI",
    ],
    github: "https://github.com/dev-keshav-raj/WeatherAPP.git",
    playStore: null,
    color: "#3b82f6",
  },

  {
    title: "Click Game",
    description:
      "Fast-paced Flutter reaction game where players tap randomly appearing targets to improve reaction speed, accuracy, and achieve the highest possible score.",
    tech: [
      "Flutter",
      "Dart",
      "Game Logic",
      "Animations",
    ],
    github: "https://github.com/dev-keshav-raj/clickgame.git",
    playStore: null,
    color: "#ef4444",
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

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
            <span className="text-gradient">Experience</span>
          </h2>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'var(--glass-border)',
            }}></div>

            {/* Experience Item */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: '0',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--accent-tertiary)',
                transform: 'translateX(-45%)',
                boxShadow: '0 0 10px var(--accent-tertiary)',
              }}></div>

              <motion.div
                className="glass-card"
                whileHover={{ x: 10, borderColor: 'var(--accent-tertiary)' }}
                style={{ padding: '2rem', transition: 'border-color 0.3s ease' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-tertiary)' }}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Software Development Intern</h3>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-tertiary)', fontWeight: 500 }}>Healbridge Private Limited</h4>
                  </div>
                  <div style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Nov 2025 - May 2026
                  </div>
                </div>

                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Building scalable applications using <strong>Flutter</strong> within a fast-paced startup environment.
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Implementing <strong>MVVM architecture</strong> and <strong>State Management</strong> for efficient data flow and UI responsiveness.
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Integrating <strong>REST APIs</strong> to handle real-time backend synchronization and user authentication.
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Experience Item */}
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-2rem',
                top: '0',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--accent-tertiary)',
                transform: 'translateX(-45%)',
                boxShadow: '0 0 10px var(--accent-tertiary)',
              }}></div>

              <motion.div
                className="glass-card"
                whileHover={{ x: 10, borderColor: 'var(--accent-tertiary)' }}
                style={{ padding: '2rem', transition: 'border-color 0.3s ease' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(20, 184, 166, 0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-tertiary)' }}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Cyber Security Intern</h3>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-tertiary)', fontWeight: 500 }}>Infotech Solutions</h4>
                  </div>
                  <div style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    May 2025 - July 2025
                  </div>
                </div>

                <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Configured <strong>Snort</strong> as a Network Intrusion Detection System (NIDS) to monitor and analyze network traffic.
                  </li>

                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Developed and tested custom <strong>Snort Rules</strong> for detecting common cyber-attacks and suspicious activities.
                  </li>

                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Simulated real-world attack scenarios to evaluate detection accuracy, alert generation, and false positive rates.
                  </li>

                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Documented project findings and optimized rule performance for improved intrusion detection efficiency.
                  </li>

                  <li style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-tertiary)' }}>▹</span>
                    Technologies Used: <strong>Snort, Linux, TCPDump, Wireshark, VirtualBox</strong>.
                  </li>
                </ul>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

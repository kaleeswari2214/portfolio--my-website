import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import styles from './Home.module.css';

const SOCIALS = [
  { icon: <FiGithub />, href: 'https://github.com/kaleeswari2214', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:kaleeswari2214@gmail.com', label: 'Email' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Home() {
  return (
    <PageWrapper>
      <section className={styles.hero}>
        {/* Ambient orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />

        <div className={`container ${styles.grid}`}>

          {/* ── Left: Text ── */}
          <div className={styles.textCol}>
            <motion.div className={styles.greeting} {...fadeUp(0.1)}>
              <span className={styles.dot} />
              Available for work
            </motion.div>

            <motion.h1 className={styles.name} {...fadeUp(0.2)}>
              Hi, I'm <br />
              <span className="gradient-text">Kaleeswari</span>
            </motion.h1>

            <motion.div className={styles.typingRow} {...fadeUp(0.3)}>
              <span className={styles.typingPrefix}>I'm a&nbsp;</span>
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2200,
                  'React Developer', 2000,
                  'Node.js Developer', 2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className={styles.typingText}
              />
            </motion.div>

            <motion.p className={styles.bio} {...fadeUp(0.4)}>
              Passionate B.Tech IT graduate crafting modern, scalable web applications
              with clean code, intuitive interfaces, and great user experiences.
            </motion.p>

            <motion.div className={styles.socials} {...fadeUp(0.5)}>
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={styles.socialIcon}
                >
                  {icon}
                </a>
              ))}
            </motion.div>

            <motion.div className={styles.actions} {...fadeUp(0.6)}>
              <a href="/resume/kaleeswari%20_dev.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                <FiDownload /> View Resume
              </a>
              <Link to="/contact" className="btn btn-outline">
                Hire Me <FiArrowRight />
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            className={styles.photoCol}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.photoRing}>
              <div className={styles.photoInner}>
                <img
                  src="/images/profile.jpg"
                  alt="Kaleeswari – Full Stack Developer"
                  className={styles.photo}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar shown when image not yet added */}
                <div className={styles.photoFallback}>
                  <span>K</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className={`${styles.badge} ${styles.badge1}`}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className={styles.badgeDot} />
              Full Stack Dev
            </motion.div>

            <motion.div
              className={`${styles.badge} ${styles.badge2}`}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className={styles.badgeDot} style={{ background: '#67e8f9' }} />
              B.Tech IT
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </motion.div>
      </section>
    </PageWrapper>
  );
}

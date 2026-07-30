import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const SOCIALS = [
  { icon: <FiGithub />, href: 'https://github.com/kaleeswari2214', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:kaleeswari@email.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <span className={styles.logo}>&lt;Kaleeswari /&gt;</span>
          <p className={styles.tagline}>Full Stack Developer · Building the web, one component at a time.</p>
        </div>

        <div className={styles.socials}>
          {SOCIALS.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={styles.socialIcon}
              whileHover={{ y: -4, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} <span>Kaleeswari</span>. Crafted with ❤️ using React + Vite
          </p>
          <motion.button
            className={styles.topBtn}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            whileHover={{ y: -3, boxShadow: '0 0 20px rgba(167,139,250,0.5)' }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import { SiExpress, SiMysql } from 'react-icons/si';
import PageWrapper from '../components/PageWrapper';
import styles from './Skills.module.css';

const SKILLS = [
  { name: 'HTML5',      icon: <FaHtml5 />,     level: 95, color: '#e34f26', category: 'Frontend' },
  { name: 'CSS3',       icon: <FaCss3Alt />,    level: 90, color: '#1572b6', category: 'Frontend' },
  { name: 'Bootstrap',  icon: <FaBootstrap />,  level: 85, color: '#7952b3', category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJs />,         level: 85, color: '#f7df1e', category: 'Frontend' },
  { name: 'React',      icon: <FaReact />,      level: 82, color: '#61dafb', category: 'Frontend' },
  { name: 'Node.js',    icon: <FaNodeJs />,     level: 76, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />,    level: 73, color: '#aaaaaa', category: 'Backend' },
  { name: 'MySQL',      icon: <SiMysql />,      level: 78, color: '#4479a1', category: 'Backend' },
  { name: 'Git',        icon: <FaGitAlt />,     level: 83, color: '#f05032', category: 'Tools' },
  { name: 'GitHub',     icon: <FaGithub />,     level: 83, color: '#ffffff', category: 'Tools' },
];

export default function Skills() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">

          <div className="section-header">
            <motion.span
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My Skills
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Technologies I Work With
            </motion.h2>
            <motion.div
              className="section-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <div className={styles.grid}>
            {SKILLS.map(({ name, icon, level, color, category }, i) => (
              <motion.div
                key={name}
                className={`glass-card ${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                {/* Icon */}
                <div className={styles.iconWrap} style={{ '--skill-color': color }}>
                  <span className={styles.icon} style={{ color }}>
                    {icon}
                  </span>
                  <div className={styles.iconGlow} style={{ background: `${color}22` }} />
                </div>

                {/* Info */}
                <div className={styles.info}>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.category}>{category}</span>
                  </div>
                  <div className={styles.levelRow}>
                    <div className={styles.barBg}>
                      <motion.div
                        className={styles.barFill}
                        style={{
                          background: `linear-gradient(90deg, ${color}88, ${color})`,
                          boxShadow: `0 0 10px ${color}55`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
                      />
                    </div>
                    <span className={styles.percent}>{level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

import { motion } from 'framer-motion';
import { FiBook, FiBriefcase, FiTarget, FiUser, FiCalendar, FiAward } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import styles from './About.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
});

const EDUCATION = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Coimbatore Institute of Engineering And Technology',
    year: '2021 – 2025',
    grade: 'CGPA: 7.84',
    icon: <FiAward />,
  },
  {
    degree: 'HSC ',
    institution: 'Coronation Girls Hr sec School',
    year: '2020 – 2021',
    grade: '83.42%',
    icon: <FiBook />,
  },
  {
    degree: 'SSLC',
    institution: 'Coronation Girls Hr sec School',
    year: '2018 – 2019',
    grade: '77.6%',
    icon: <FiBook />,
  },
];

export default function About() {
  return (
    <PageWrapper>
      <section className="section">
        <div className="container">

          <div className="section-header">
            <motion.span className="section-tag" {...fadeUp()}>About Me</motion.span>
            <motion.h2 className="section-title" {...fadeUp(0.1)}>Know Who I Am</motion.h2>
            <motion.div className="section-line" {...fadeUp(0.2)} />
          </div>

          {/* Top: image + summary */}
          <div className={styles.topGrid}>
            <motion.div
              className={styles.imgWrap}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imgFrame}>
                <img
                  src="/images/about.jpg"
                  alt="About Kaleeswari"
                  className={styles.img}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className={styles.imgFallback}>
                  <FiUser size={60} />
                </div>
              </div>

            </motion.div>

            <motion.div
              className={styles.summaryCol}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                <FiUser style={{ marginRight: '0.4rem' }} />
                Professional Summary
              </span>
              <p className={styles.summaryText}>
                I'm <strong>Kaleeswari</strong>, a passionate Full Stack Developer with a B.Tech in
                Information Technology. I love building end-to-end web applications using modern
                technologies like <span className={styles.highlight}>React</span>,{' '}
                <span className={styles.highlight}>Node.js</span>, and{' '}
                <span className={styles.highlight}>MySQL</span>.
              </p>
              <p className={styles.summaryText} style={{ marginTop: '0.75rem' }}>
                I thrive on solving real-world problems through clean, efficient code and intuitive
                user interfaces. My goal is to create digital experiences that are both beautiful
                and functional.
              </p>

              <div className={styles.statsRow}>
                {[
                  { num: '5+', label: 'Projects Built' },
                  { num: '10', label: 'Technologies' },
                  { num: '6', label: 'Certifications' },
                ].map(({ num, label }) => (
                  <div key={label} className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLabel}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom: Education + Internship + Objective */}
          <div className={styles.bottomGrid}>

            {/* Education */}
            <motion.div className={`glass-card ${styles.card}`} {...fadeUp(0.1)}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}><FiBook /></span>
                <h3 className={styles.cardTitle}>Education</h3>
              </div>
              <div className={styles.timeline}>
                {EDUCATION.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineTop}>
                        <span className={styles.degree}>{item.degree}</span>
                        <span className={styles.yearBadge}>
                          <FiCalendar size={11} /> {item.year}
                        </span>
                      </div>
                      <span className={styles.institution}>{item.institution}</span>
                      <span className={styles.grade}>{item.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Internship */}
            <motion.div className={`glass-card ${styles.card}`} {...fadeUp(0.2)}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}><FiBriefcase /></span>
                <h3 className={styles.cardTitle}>Internship</h3>
              </div>
              <div className={styles.internshipCard}>
                <div className={styles.internshipTop}>
                  <div>
                    <h4 className={styles.internRole}>Full Stack Developer Intern</h4>
                    <p className={styles.internCompany}>Top Class Entertainment LLP.</p>
                  </div>
                  <span className={styles.yearBadge}><FiCalendar size={11} /> Mar – Sep 2025</span>
                </div>
                <ul className={styles.internList}>
                  <li>Built RESTful APIs using Node.js & Express.js</li>
                  <li>Developed responsive React dashboards</li>
                  <li>Managed MySQL databases and wrote optimized queries</li>
                  <li>Collaborated with team using Git & GitHub workflows</li>
                </ul>
              </div>
            </motion.div>

            {/* Career Objective */}
            <motion.div className={`glass-card ${styles.card}`} {...fadeUp(0.3)}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}><FiTarget /></span>
                <h3 className={styles.cardTitle}>Career Objective</h3>
              </div>
              <p className={styles.objectiveText}>
                To secure a challenging position as a <strong>Full Stack Developer</strong> where I
                can leverage my skills in React, Node.js, and database management to contribute to
                innovative projects, grow professionally, and deliver impactful digital solutions
                that make a real difference.
              </p>
              <div className={styles.objectiveTags}>
                {['React', 'Node.js', 'MySQL', 'REST APIs',].map(t => (
                  <span key={t} className="neon-badge">{t}</span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

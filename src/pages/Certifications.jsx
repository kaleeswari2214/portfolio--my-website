import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import styles from './Certifications.module.css';

const CERTS = [
  {
    title: "Full Stack Developer Internship",
    date: 'March - september 2025',
    image: '/certificates/fullstack.jpg',
    color: '#f472b6',
    desc: "Successfully completed a 6-month Full Stack Web Development Internship with hands-on experience in developing responsive web applications using React, Node.js, Express.js, and MySQL. Worked on real-time full-stack projects and REST API integration.",

  },

  {
    title: 'AI Fluency',
    date: 'January 2026',
    image: '/certificates/ai-fluency.jpg',
    color: '#67e8f9',
    desc: 'Fundamentals of Artificial Intelligence and ',
  },
  {
    title: ' Introduction to Prompt Engineering',
    date: 'july 2026',
    image: '/certificates/prompt-engineering.jpg',
    color: '#818cf8',
    desc: "Successfully completed the 'Introduction to Prompt Engineering' course. Learned the fundamentals of prompt engineering, prompt design techniques, effective interaction with Large Language Models (LLMs), and best practices for generating accurate and reliable AI responses.",

  },
  {
    title: '  Prompt Engineering Application ',
    date: 'july 2026',
    image: '/certificates/prompt-engineering application.jpg',
    color: '#818cf8',
    desc: "Successfully completed the 'Prompt Engineering Applications' course. Learned how to apply prompt engineering techniques to real-world AI tasks, including content generation, text summarization, information extraction, question answering, and workflow automation using Large Language Models (LLMs).",

  },
  {
    title: 'Blockchain Fundamentals',
    date: 'September 2023',
    image: '/certificates/blockchain.jpg',
    color: '#34d399',
    desc: "Completed a 3-Day Virtual Workshop on Blockchain and Decentralized Applications conducted by the Amrita Center for Cybersecurity Systems and Networks.",
  },
  {
    title: 'Paper Presentation',
    date: 'May 2024',
    image: '/certificates/paper-presentation.jpg',
    color: '#f472b6',
    desc: "Presented a research paper on 'Fake Logo Detection Using AI' at the National Conference conducted by Coimbatore Institute of Engineering and Technology (CIET) in May 2024.",
  },

];

export default function Certifications() {
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
              Achievements
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              My Certifications
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
            {CERTS.map(({ title, org, date, image, color, desc }, i) => (
              <motion.div
                key={title}
                className={`glass-card ${styles.card}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                {/* Certificate image */}
                <div className={styles.imgWrap} style={{ '--cert-color': color }}>
                  <img
                    src={image}
                    alt={title}
                    className={styles.img}
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles.imgFallback} style={{ background: `${color}12` }}>
                    <FiAward size={40} style={{ color, opacity: 0.5 }} />
                  </div>
                  <div className={styles.imgShine} />
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <div className={styles.topRow}>
                    <span className={styles.orgBadge} style={{ color, borderColor: `${color}44`, background: `${color}10` }}>
                      {org}
                    </span>
                    <span className={styles.date}>
                      <FiCalendar size={11} /> {date}
                    </span>
                  </div>

                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.desc}>{desc}</p>

                  <a
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.viewBtn}
                    style={{ color, borderColor: `${color}55`, background: `${color}0d` }}
                  >
                    <FiExternalLink size={14} /> View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

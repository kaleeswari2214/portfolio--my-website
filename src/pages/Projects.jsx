import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import styles from './Projects.module.css';

const PROJECTS = [
  {

    title: "To-Do Application for Daily Task Management",
    desc: "A simple to-do app built to organize daily tasks with a clean interface, easy task management, and a smooth user experience, making everyday planning more productive and effortless.",
    tech: ["html", "CSS", "JavaScript", "React", "Node.js", "Mysql"],
    github: "https://github.com/kaleeswari2214/Todo-real-code/tree/main/todo",
    accent: '#a78bfa',
  },
  {

    title: "Role-Based Access Control (RBAC) Member Management System",
    desc: "Developed a full-stack Role-Based Access Control (RBAC) application with secure user authentication and authorization. Implemented user registration, login, JWT-based authentication, role-based access, member management (CRUD), search, pagination, and protected routes. Built a responsive interface and integrated REST APIs with a MySQL database for efficient data management.",
    tech: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "REST API"
    ],
    github: "https://github.com/kaleeswari2214/RBAC-frontend",

    accent: '#818cf8',
  },
  {
    title: "Personal Portfolio Website",
    desc: "Designed and developed a responsive personal portfolio website to showcase my profile, technical skills, projects, education, certifications, and contact information. Built with React and modern UI design principles to provide a professional online presence.",
    tech: ["Html", "CSS", "JavaScript", "Bootstrap", "React"],
    github: "https://github.com/kaleeswari2214/portfolio",

    accent: '#67e8f9',
  },

  {

    title: "Dream Travel Booking",
    desc: "Developed a flight booking web application with user-friendly UI using React, HTML, CSS, and JavaScript.Integrated backend APIs with Node.js to handle booking logic, data flow, and dynamic content updates.",
    tech: ["Html", "css", "Bootstrap", "javascript", "React", "node.js", "mysql"],
    github: "#",

    accent: '#f472b6',
  },
  {
    title: "Fake Logo Detection Using AI",
    desc: "Conducted research to identify fake and real logos by comparing input images with sample logos.Used deep learning techniques especially YOLO algorithm, for accurate detection.",
    tech: ["python", "Deeplearning", "YOLO Algorithm", "Open Cv"],
    github: "https://github.com/kaleeswari2214/Fake-Logo-Detection",
    accent: '#f9bf67',

  },
  {
    title: "Placement Od",
    desc: "Developed a placement management website using HTML, CSS, JavaScript, and PHP.Implemented features for student registration, job listings, and data management with a user-friendly interface.",
    tech: ["Html", "Css", "Javascript", "php"],
    github: "https://github.com/kaleeswari2214/Placement-od",
    accent: '#818cf8',
  },


  {
    title: "Data Security  Using Encryption  And Steganography",
    desc: "Implemented two algorithms for secure data handling—one for encrypting and hiding data. The second algorithm is used for decoding and restoring the original data efficiently.",
    tech: ["python", "Cryptography", "steganography Techniques"],
    github: "#",
    accent: '#edf967',

  },
];

export default function Projects() {
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
              My Work
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured Projects
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
            {PROJECTS.map(({ title, desc, tech, github, live, accent }, i) => (
              <motion.div
                key={`${title}-${i}`}
                className={`glass-card ${styles.card}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ '--accent': accent }}
              >
                <div className={styles.body}>
                  <h3 className={styles.title} style={{ '--accent': accent }}>{title}</h3>
                  <p className={styles.desc}>{desc}</p>

                  <div className={styles.tech}>
                    {tech.map(t => (
                      <span key={t} className={styles.tag} style={{ borderColor: `${accent}44`, color: accent, background: `${accent}10` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <a href={github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.55rem 1.2rem' }}>
                      <FiGithub /> GitHub
                    </a>
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

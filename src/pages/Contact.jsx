import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import PageWrapper from '../components/PageWrapper';
import styles from './Contact.module.css';

const INFO = [
  { icon: <FiMail />, label: 'Email', value: 'kaleeswari2214@email.com', href: 'mailto:kaleeswari@email.com', color: '#a78bfa' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 9345118740', href: 'tel:+919876543210', color: '#67e8f9' },
  { icon: <FiMapPin />, label: 'Location', value: 'Tamil Nadu, India', href: null, color: '#f472b6' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/kaleeswari2214', href: 'https://github.com/kaleeswari2214', color: '#e2e8f0' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/kaleeswari', href: 'https://www.linkedin.com/in/kaleeswari-g-08a0242b5?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#818cf8' },
];

const INIT = { name: '', email: '', subject: '', message: '' };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Name is required';
  if (!f.email.trim()) e.email = 'Email is required';
  else if (!/\S+@\S+\.\S+/.test(f.email)) e.email = 'Enter a valid email';
  if (!f.subject.trim()) e.subject = 'Subject is required';
  if (!f.message.trim()) e.message = 'Message is required';
  return e;
}

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const onSubmit = e => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSent(true);
    setForm(INIT);
    setTimeout(() => setSent(false), 5000);
  };

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
              Get In Touch
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Contact Me
            </motion.h2>
            <motion.div
              className="section-line"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </div>

          <div className={styles.layout}>

            {/* Info column */}
            <motion.div
              className={styles.infoCol}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className={styles.infoTitle}>Let's Work Together</h3>
              <p className={styles.infoText}>
                I'm open to full-time roles, freelance projects, and exciting collaborations.
                Drop me a message and I'll get back to you within 24 hours!
              </p>

              <div className={styles.infoCards}>
                {INFO.map(({ icon, label, value, href, color }) => (
                  <div key={label} className={`glass-card ${styles.infoCard}`}>
                    <span className={styles.infoIcon} style={{ color, background: `${color}12`, borderColor: `${color}30` }}>
                      {icon}
                    </span>
                    <div>
                      <span className={styles.infoLabel}>{label}</span>
                      {href
                        ? <a href={href} target="_blank" rel="noreferrer" className={styles.infoValue} style={{ '--hover': color }}>{value}</a>
                        : <span className={styles.infoValue}>{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              className={`glass-card ${styles.form}`}
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              {sent && (
                <motion.div
                  className={styles.successMsg}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FiCheck size={18} /> Message sent! I'll reply soon.
                </motion.div>
              )}

              <div className={styles.row}>
                <Field label="Name" name="name" value={form.name} onChange={onChange} error={errors.name} placeholder="Your full name" />
                <Field label="Email" name="email" value={form.email} onChange={onChange} error={errors.email} placeholder="your@email.com" type="email" />
              </div>
              <Field label="Subject" name="subject" value={form.subject} onChange={onChange} error={errors.subject} placeholder="What's this about?" />
              <Field label="Message" name="message" value={form.message} onChange={onChange} error={errors.message} placeholder="Your message..." textarea />

              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <FiSend /> Send Message
              </button>
            </motion.form>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function Field({ label, name, value, onChange, error, placeholder, type = 'text', textarea }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {textarea
        ? <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={5} className={`${styles.input} ${styles.textarea} ${error ? styles.inputErr : ''}`} />
        : <input name={name} value={value} onChange={onChange} placeholder={placeholder} type={type} className={`${styles.input} ${error ? styles.inputErr : ''}`} />
      }
      {error && <span className={styles.errMsg}>{error}</span>}
    </div>
  );
}

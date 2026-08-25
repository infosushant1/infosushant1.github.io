import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles
} from "lucide-react";
import Navbar from "./components/Navbar";
import NeuralBackdrop from "./components/NeuralBackdrop";
import Section from "./components/Section";
import { portfolio } from "./data/portfolioData";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="visible"
              variants={reveal}
            >
              <div className="eyebrow-pill">
                <span className="pulse-dot" />
                OPEN TO OPPORTUNITIES
              </div>

              <p className="hero-kicker">HELLO, I'M SUSHANT SHARMA</p>

              <h1>
                Building intelligent
                <br />
                <span>software with AI.</span>
              </h1>

              <p className="hero-role">{portfolio.title}</p>

              <p className="hero-description">{portfolio.summary}</p>

              <div className="hero-buttons">
                <a className="button button-dark" href="#projects">
                  Explore projects <ArrowUpRight size={17} />
                </a>
                <a
                  className="button button-light"
                  href="/resume/Sushant_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download resume
                </a>
              </div>

              <div className="hero-socials">
                {portfolio.profiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.name} <ExternalLink size={12} />
                  </a>
                ))}
              </div>

              <div className="hero-location">
                <MapPin size={15} /> {portfolio.location}
              </div>
            </motion.div>

            <motion.div
              className="portrait-stage"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
            >
              <div className="portrait-grid" />
              <NeuralBackdrop />

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="portrait-card">
                <div className="portrait-glow" />
                <img
                  src="/images/sushant-portrait.png"
                  alt="Stylized professional portrait of Sushant Sharma"
                  className="portrait"
                />
              </div>

              <div className="floating-card floating-card-top">
                <span className="mini-icon"><Code2 size={14} /></span>
                <span><strong>AI / ML</strong><small>Software Engineering</small></span>
              </div>

              <div className="floating-card floating-card-bottom">
                <CheckCircle2 size={17} />
                <span>Building practical AI systems</span>
              </div>
            </motion.div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <Section id="about" number="01" eyebrow="PROFILE" title="A developer focused on useful AI.">
          <div className="about-layout">
            <div className="about-main">
              <div className="about-accent"><Sparkles size={20} /></div>
              <p>{portfolio.about}</p>
              <div className="about-facts">
                <div><small>Education</small><strong>{portfolio.education.degree}</strong></div>
                <div><small>Institute</small><strong>{portfolio.education.institute}</strong></div>
                <div><small>Location</small><strong>{portfolio.location}</strong></div>
                <div><small>Period</small><strong>{portfolio.education.period}</strong></div>
              </div>
            </div>

            <div className="statement-card">
              <span>01 — APPROACH</span>
              <h3>Professional first.<br />Technology second.</h3>
              <p>Clean interfaces, practical systems, readable engineering and AI that solves a real problem.</p>
            </div>
          </div>
        </Section>

        <Section id="skills" number="02" eyebrow="CAPABILITIES" title="Tools I work with.">
          <div className="skill-grid">
            {Object.entries(portfolio.skills).map(([category, skills]) => (
              <motion.article
                className="skill-card"
                key={category}
                whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
              >
                <span className="skill-number">/</span>
                <h3>{category}</h3>
                <div className="chips">
                  {skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" number="03" eyebrow="SELECTED WORK" title="Projects with a purpose.">
          <div className="project-grid">
            {portfolio.projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reveal}
              >
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.date}</span>
                </div>
                <div className="project-icon"><Code2 size={20} /></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a
                  className="text-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository <Github size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="achievements" number="04" eyebrow="LEADERSHIP" title="Leadership beyond code.">
          <div className="achievement-list">
            {portfolio.achievements.map((achievement, index) => (
              <motion.article
                className="achievement"
                key={achievement.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
              >
                <div className="achievement-index">0{index + 1}</div>
                <div className="achievement-content">
                  <span className="date">{achievement.date}</span>
                  <h3>{achievement.title}</h3>
                  <strong>{achievement.role}</strong>
                  <p>{achievement.description}</p>
                </div>
                <Award className="achievement-icon" size={24} />
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="certifications" number="05" eyebrow="VERIFIED LEARNING" title="Certifications & trails.">
          <div className="cert-grid">
            {portfolio.certifications.map((certification) => (
              <motion.article
                className="cert-card"
                key={certification.name}
                whileHover={{ y: -5 }}
              >
                <div className="cert-top">
                  <span>{certification.issuer}</span>
                  <Award size={18} />
                </div>
                <h3>{certification.name}</h3>
                {"credential" in certification && certification.credential && (
                  <p>Credential: {certification.credential}</p>
                )}
                {"note" in certification && certification.note && (
                  <p>{certification.note}</p>
                )}
                <a href={certification.url} target="_blank" rel="noopener noreferrer">
                  Verify / view profile <ExternalLink size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="contact" number="06" eyebrow="CONTACT" title="Let's build something useful.">
          <div className="contact-layout">
            <div className="contact-copy">
              <p>
                Have a software, AI application, or machine-learning opportunity?
                Let's connect and talk about what can be built.
              </p>

              <div className="contact-actions">
                <a href={`mailto:${portfolio.contact.email}`} className="button button-dark">
                  Email me <Mail size={16} />
                </a>
                <a href={portfolio.profiles[0].url} target="_blank" rel="noopener noreferrer" className="button button-light">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div><Mail size={17} /><span><small>Email</small>{portfolio.contact.email}</span></div>
              <div><Phone size={17} /><span><small>Phone</small>{portfolio.contact.phone}</span></div>
              <div><MapPin size={17} /><span><small>Location</small>{portfolio.location}</span></div>
            </div>
          </div>
        </Section>
      </main>

      <footer>
        <div>
          <strong>Sushant Sharma</strong>
          <span>Software Engineer | AI & ML</span>
        </div>
        <div className="footer-links">
          {portfolio.profiles.map((profile) => (
            <a key={profile.name} href={profile.url} target="_blank" rel="noopener noreferrer">
              {profile.name}
            </a>
          ))}
        </div>
        <span>© 2026 Sushant Sharma</span>
      </footer>
    </div>
  );
}

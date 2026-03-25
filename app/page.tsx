import Image from "next/image";
import { portfolio } from "@/lib/portfolio";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Strengths", href: "#strengths" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero panel" id="top">
        <header className="topbar">
          <a className="brand" href="#top">
            {portfolio.name}
          </a>

          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{portfolio.availability}</span>
            <p className="hero-kicker">{portfolio.title}</p>
            <h1>{portfolio.role}</h1>
            <p className="lead">{portfolio.summary}</p>
            <p className="sublead">{portfolio.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Review Projects
              </a>
              <a className="button button-secondary" href={portfolio.links.aiResume} download>
                Download Resume
              </a>
              <a className="button button-secondary" href={portfolio.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="hero-meta">
              <span>{portfolio.location}</span>
              <span>{portfolio.phone}</span>
              <a href={portfolio.links.email}>{portfolio.email}</a>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="portrait-card">
              <div className="portrait-frame">
                <Image
                  src="/headshot.jpg"
                  alt="Portrait of Tanzim Hossain Safin"
                  width={520}
                  height={620}
                  priority
                />
              </div>

              <div className="identity-card">
                <p>{portfolio.name}</p>
                <span>{portfolio.title}</span>
              </div>

              <div className="quick-links">
                <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={portfolio.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={portfolio.links.blockchainResume} download>
                  Blockchain CV
                </a>
              </div>
            </div>
          </aside>
        </div>

        <div className="hero-lower-grid">
          <div className="recruiter-note">
            <span className="section-label">Recruiter Snapshot</span>
            <p>{portfolio.recruiterPitch}</p>
          </div>

          <div className="stats-grid">
            {portfolio.stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel section-grid" id="strengths">
        <div className="section-heading">
          <span className="section-label">Why This Reads Strongly</span>
          <h2>Structured to look credible to recruiters and engineering hiring teams.</h2>
        </div>

        <div className="feature-grid">
          {portfolio.strengths.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="signal-panel">
          {portfolio.recruiterSignals.map((signal) => (
            <div key={signal} className="signal-row">
              <span className="signal-dot" />
              <p>{signal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel section-grid" id="projects">
        <div className="section-heading">
          <span className="section-label">Selected Work</span>
          <h2>Projects presented like engineering case studies, not a gallery of cards.</h2>
        </div>

        <div className="project-grid">
          {portfolio.projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-topline">
                <span>{project.category}</span>
                <a href={project.href} target="_blank" rel="noreferrer">
                  View Repository
                </a>
              </div>

              <h3>{project.title}</h3>
              <p className="project-headline">{project.headline}</p>
              <p>{project.description}</p>

              <ul className="bullet-list">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="tag-row">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel dual-grid" id="skills">
        <div className="stack-card">
          <span className="section-label">Technical Breadth</span>
          <h2>Clear technical coverage without drowning the page in keyword clutter.</h2>

          <div className="skills-grid">
            {Object.entries(portfolio.skills).map(([group, items]) => (
              <article key={group} className="skill-card">
                <h3>{group}</h3>
                <div className="tag-row">
                  {items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="resume-card">
          <span className="section-label">Resume + Education</span>
          <h2>Everything a recruiter usually looks for, in one place.</h2>
          <p>
            Use the software engineering resume for backend and AI roles, or the blockchain
            version for Web3-focused applications.
          </p>

          <div className="resume-links">
            <a className="button button-primary" href={portfolio.links.aiResume} download>
              Software Resume
            </a>
            <a className="button button-secondary" href={portfolio.links.blockchainResume} download>
              Blockchain Resume
            </a>
          </div>

          <div className="education-card">
            <h3>{portfolio.education.institution}</h3>
            <p>{portfolio.education.degree}</p>
            <span>{portfolio.education.details}</span>
            <strong>{portfolio.education.score}</strong>
          </div>
        </div>
      </section>

      <section className="panel research-panel" id="research">
        <div className="section-heading compact">
          <span className="section-label">Research Signal</span>
          <h2>{portfolio.thesis.title}</h2>
        </div>

        <p>{portfolio.thesis.description}</p>
        <a className="inline-link" href={portfolio.thesis.href} target="_blank" rel="noreferrer">
          Review Thesis Repository
        </a>
      </section>

      <section className="panel contact-panel" id="contact">
        <div>
          <span className="section-label">Next Step</span>
          <h2>Available for teams that value backend depth and engineering discipline.</h2>
          <p>
            If you are hiring for backend engineering, AI product infrastructure, or blockchain
            systems work, I can share code, resumes, and project context directly.
          </p>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href={portfolio.links.email}>
            Contact Me
          </a>
          <a className="button button-secondary" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button button-secondary" href={portfolio.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

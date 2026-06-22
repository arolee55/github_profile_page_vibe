import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile, projects, skills, strengths, type LinkItem, type Project } from "./portfolioData";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Strengths", href: "#strengths" },
  { label: "Contact", href: "#contact" },
];

function iconForLink(type: LinkItem["type"]) {
  if (type === "github") return <Github aria-hidden="true" size={18} />;
  if (type === "linkedin") return <Linkedin aria-hidden="true" size={18} />;
  if (type === "email") return <Mail aria-hidden="true" size={18} />;
  return <ArrowUpRight aria-hidden="true" size={18} />;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <img
        className="project-image"
        src={project.imageUrl}
        alt={project.imageAlt ?? `${project.title} 미리보기`}
      />
    );
  }

  return (
    <div className={`project-visual project-visual--${project.accent}`} aria-hidden="true">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid">
        <div className="visual-main">
          <span className="visual-kicker">{project.role}</span>
          <strong>{project.title}</strong>
          <div className="visual-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="visual-side">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="맨 위로 이동">
          <span>{profile.initials}</span>
          <strong>{profile.name}</strong>
        </a>
        <nav className="nav-links" aria-label="주요 섹션">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={18} />
              {profile.role}
            </p>
            <h1 id="hero-title">{profile.headline}</h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-meta" aria-label="프로필 요약">
              <span>
                <MapPin aria-hidden="true" size={17} />
                {profile.location}
              </span>
              <span>
                <BriefcaseBusiness aria-hidden="true" size={17} />
                {profile.availability}
              </span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                프로젝트 보기
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                연락하기
                <Mail aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="프로필 이미지와 핵심 지표">
            <div className="avatar-frame">
              {profile.avatarUrl ? (
                <img src={profile.avatarUrl} alt={profile.avatarAlt} />
              ) : (
                <span>{profile.initials}</span>
              )}
            </div>
            <div>
              <p className="panel-label">Portfolio</p>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
            <div className="metric-grid">
              {profile.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="content-section projects-band" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="section-kicker">Selected Work</p>
            <h2 id="projects-title">대표 프로젝트</h2>
            <p>
              결과물의 맥락, 맡은 역할, 개선 목표가 빠르게 읽히도록 정리했습니다.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual project={project} />
                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.period}</span>
                    <span>{project.role}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="project-impact">{project.impact}</p>
                  <ul className="tag-list" aria-label={`${project.title} 기술 스택`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" title={link.label}>
                        {iconForLink(link.type)}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading compact">
            <p className="section-kicker">Toolbox</p>
            <h2 id="skills-title">기술 스택</h2>
          </div>
          <div className="skill-grid">
            {skills.map((group) => (
              <section className="skill-group" key={group.category} aria-labelledby={`skill-${group.category}`}>
                <h3 id={`skill-${group.category}`}>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="content-section strengths-band" id="strengths" aria-labelledby="strengths-title">
          <div className="section-heading compact">
            <p className="section-kicker">Working Style</p>
            <h2 id="strengths-title">일하는 방식</h2>
          </div>
          <div className="strength-list">
            {strengths.map((strength, index) => (
              <article className="strength-item" key={strength.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">같이 만들 이야기가 있다면 편하게 연락해 주세요.</h2>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              이메일 보내기
              <Mail aria-hidden="true" size={18} />
            </a>
            {profile.links.map((link) => (
              <a key={link.href} className="icon-link" href={link.href} target="_blank" rel="noreferrer" title={link.label}>
                {iconForLink(link.type)}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useMemo, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { about } from "./data/projects";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
};

function extractGitHubUsername(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.pathname.replace(/\//g, "");
  } catch {
    return "";
  }
}

function formatUpdatedDate(date: string): string {
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return date;
  }
}

function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" to="/">
          tobiasryttlinger.
        </Link>
        <nav className="nav-links">
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  const githubUsername = useMemo(() => extractGitHubUsername(about.github), []);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);
  const [repoError, setRepoError] = useState("");

  useEffect(() => {
    if (!githubUsername) {
      setIsLoadingRepos(false);
      setRepoError("Could not resolve GitHub username.");
      return;
    }

    const controller = new AbortController();

    const loadRepos = async () => {
      try {
        setIsLoadingRepos(true);
        setRepoError("");
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const payload = (await response.json()) as GitHubRepo[];
        const ownRepos = payload.filter((repo) => !repo.fork).slice(0, 12);
        setRepos(ownRepos);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setRepoError("Could not load GitHub repositories right now.");
        }
      } finally {
        setIsLoadingRepos(false);
      }
    };

    void loadRepos();
    return () => controller.abort();
  }, [githubUsername]);

  return (
    <main className="shell home-layout">
      <aside className="intro-sidebar">
        <h1>{about.name}</h1>
        <h2>{about.title}</h2>
        <p>
          I build polished, performant front-end game experiences with Haxe and React Native.
        </p>
        <nav className="sidebar-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="sidebar-socials">
          <a href={about.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={about.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${about.contactEmail}`}>Email</a>
        </div>
      </aside>

      <div className="content-column">
        <section id="about" className="section-block reveal" data-reveal>
          <div className="section-heading">
            <h2>About</h2>
          </div>
          {about.bio.map((entry) => (
            <p key={entry} className="body-text">
              {entry}
            </p>
          ))}
        </section>

        <section id="experience" className="section-block reveal" data-reveal>
          <div className="section-heading">
            <h2>Experience</h2>
          </div>
          <div className="timeline">
            <article className="history-card reveal" data-reveal>
              <span>2019 - 2024</span>
              <h3>Linkoping University</h3>
              <p>MSc in Media Technology</p>
              <small>Project work spanning graphics, simulation, UX, and visualization.</small>
            </article>
            <article className="history-card reveal" data-reveal>
              <span>Focus</span>
              <h3>Interactive Product Engineering</h3>
              <p>Software + visual communication</p>
              <small>
                Built end-to-end projects from technical implementation to user-facing
                presentation.
              </small>
            </article>
          </div>
        </section>

        <section id="projects" className="section-block reveal" data-reveal>
          <div className="section-heading">
            <h2>Projects</h2>
          </div>
          {isLoadingRepos ? <p className="state-text">Loading repositories...</p> : null}
          {repoError ? <p className="state-text">{repoError}</p> : null}
          {!isLoadingRepos && !repoError ? (
            <div className="github-grid">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  className="github-card"
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>{repo.name}</h3>
                  <p>{repo.description ?? "No description available."}</p>
                  <div className="github-meta">
                    <span>{repo.language ?? "Unknown"}</span>
                    <strong>{repo.stargazers_count} stars</strong>
                  </div>
                  <p className="repo-updated">Updated {formatUpdatedDate(repo.updated_at)}</p>
                  {repo.homepage ? <p className="repo-homepage">Demo: {repo.homepage}</p> : null}
                </a>
              ))}
            </div>
          ) : null}
        </section>

        <section id="contact" className="section-block reveal" data-reveal>
          <div className="section-heading">
            <h2>Contact</h2>
          </div>
          <p className="body-text">Open to software and product engineering opportunities.</p>
          <div className="button-row">
            <a className="btn btn-primary" href={`mailto:${about.contactEmail}`}>
              {about.contactEmail}
            </a>
            <a className="btn" href={about.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={about.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="shell about-page">
      <section className="section-heading reveal" data-reveal>
        <h1>About</h1>
      </section>
      <section className="about-layout reveal" data-reveal>
        <div>
          <h2>{about.name}</h2>
          <p className="about-title">{about.title}</p>
          {about.bio.map((entry) => (
            <p key={entry}>{entry}</p>
          ))}
          <div className="button-row">
            <a className="btn btn-primary" href={`mailto:${about.contactEmail}`}>
              {about.contactEmail}
            </a>
            <a className="btn" href={about.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={about.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-wrap">
        <small>(c) 2026 Tobias Ryttlinger</small>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealElement = (element: HTMLElement) => {
      element.style.opacity = "1";
      element.style.transform = "translate3d(0, 0, 0) scale(1)";
    };

    if (prefersReducedMotion) {
      revealTargets.forEach(revealElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          revealElement(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="app-root">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

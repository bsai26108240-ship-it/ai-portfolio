
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">S.</span>
          <span>Sameer Shah</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's connect <span>↗</span>
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <div className="status">
            <span className="status-dot" />
            BS Artificial Intelligence Student
          </div>

          <p className="eyebrow">EXPLORING THE WORLD OF AI</p>

          <h1>
            Building ideas
            <br />
            into <span>intelligent</span>
            <br />
            experiences.
          </h1>

          <p className="hero-description">
            I'm an aspiring AI engineer learning to turn code,
            curiosity, and creative thinking into meaningful projects.
            This is where my journey begins.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="secondary-button" href="#about">
              More about me
            </a>
          </div>

          <div className="hero-footnote">
            <span>01 / THE BEGINNING</span>
            <span>Curiosity → Code → Creation</span>
          </div>
        </div>

        <div className="visual-panel" aria-label="Abstract AI-inspired artwork">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="core">
            <div className="core-inner">AI</div>
          </div>
          <span className="visual-label label-top">NEURAL SYSTEM / 001</span>
          <span className="visual-label label-bottom">THINK · BUILD · LEARN</span>
          <span className="node node-one" />
          <span className="node node-two" />
          <span className="node node-three" />
        </div>
      </section>

      <section className="intro-strip" id="about">
        <span className="strip-label">CURRENT FOCUS</span>
        <div className="focus-items">
          <span>Python</span>
          <span>Problem Solving</span>
          <span>Web Development</span>
          <span>Artificial Intelligence</span>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE WORKBENCH</p>
            <h2>Learning by <span>building.</span></h2>
          </div>
          <p className="section-note">
            Every project starts with a question.
            These are the beginnings of my journey.
          </p>
        </div>

        <article className="project-card">
          <div className="project-number">PROJECT / 001</div>
          <div>
            <h3>Personal Portfolio</h3>
            <p>
              My first step into modern web development:
              building a home for my work, learning, and future ideas.
            </p>
            <div className="project-tags">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>
          <span className="project-arrow">↗</span>
        </article>
      </section>

      <footer id="contact">
        <div>
          <p className="eyebrow">HAVE AN IDEA?</p>
          <h2>Let's make something <span>meaningful.</span></h2>
        </div>
        <p className="footer-note">
          More projects. More learning. More to come.
        </p>
        <div className="footer-bottom">
          <span>© 2026 · Built while learning.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App

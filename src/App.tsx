import "./App.css";

const skills = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "Firebase",
  "Android",
  "iOS",
  "Git & GitHub",
  "REST API",
];

const projects = [
  {
    title: "SecureChat",
    description:
      "A mobile messaging application with authentication and real-time communication features.",
    tech: "React Native · TypeScript · Firebase",
  },
  {
    title: "WinoCash",
    description:
      "A fintech mobile application designed to provide users with convenient digital financial services.",
    tech: "React Native · TypeScript · Firebase",
  },
  {
    title: "MaTT",
    description:
      "A mobile application focused on delivering a simple and intuitive user experience.",
    tech: "React Native · JavaScript",
  },
  {
    title: "ChefBea Catering",
    description:
      "A digital solution designed to showcase catering services and improve customer engagement.",
    tech: "React Native · JavaScript",
  },
];

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="logo">
            Edwin Ogali
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="intro">HELLO, I'M EDWIN OGALI</p>

            <h1>
              Mobile App
              <br />
              <span>Developer.</span>
            </h1>

            <p className="hero-description">
              I build reliable and user-focused mobile applications for Android
              and iOS using React Native and modern development technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button primary">
                View Projects
              </a>

              <a href="#contact" className="button secondary">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="section-header">
            <span>01-About Me</span>
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <p>
              I am a Mobile App Developer with a passion for building practical,
              responsive and user-friendly applications.
            </p>

            <p>
              My development experience includes React Native, TypeScript,
              JavaScript, Firebase and API integration. I enjoy turning ideas
              into functional products while maintaining clean and maintainable
              code.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <div className="section-header">
            <span>02-Skills</span>
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <div className="section-header">
            <span>03-Selected Projects</span>
            <h2>Selected Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-top">
                  <span className="project-number">PROJECT</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="project-tech">{project.tech}</span>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <div className="section-header">
            <span>04-Experience</span>
            <h2>Experience</h2>
          </div>

          <div className="experience">
            <div className="experience-date">Current</div>

            <div>
              <h3>Android & iOS Developer</h3>

              <h4>Early Code School</h4>

              <p>
                Developing mobile applications for Android and iOS using React
                Native. Working on application interfaces, Firebase integration,
                APIs, authentication, debugging and overall application
                performance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <p className="contact-label">CONTACT</p>

          <h2>
            Let's work
            <br />
            <span>together.</span>
          </h2>

          <p>
            I'm open to mobile development opportunities, freelance work and
            interesting projects.
          </p>

          <a href="mailto:edwinogali6@gmail.com" className="button primary">
            Send an Email
          </a>
          <a href="https://wa.link/zx42eg" className="button secondary">
            WhatsApp
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Edwin Ogali</p>

        <div>
          <a
            href="https://github.com/edwinogali6"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/edwin-ogali-02731a247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

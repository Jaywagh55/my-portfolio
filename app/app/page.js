export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <section style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem" }}>👋 Hi, I'm Jay Wagh</h1>
        <p>B.Tech Student | AI & Computer Vision Enthusiast</p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>About Me</h2>
        <p>
          I'm a passionate engineering student interested in AI, Machine Learning, 
          and Computer Vision. I love building real-world projects and solving problems with code.
        </p>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Skills</h2>
        <ul>
          <li>Python, OpenCV, Mediapipe</li>
          <li>TensorFlow, PyTorch, Scikit-Learn</li>
          <li>HTML, CSS, JavaScript, React</li>
          <li>Git, GitHub, VS Code</li>
        </ul>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Driver Drowsiness Detection</b> — Detects when the driver is sleepy using AI & OpenCV.
          </li>
          <li>
            <b>AI-Powered Crop Precision Farming</b> — Uses weather & voice inputs for smart farming decisions.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:jaywagh58@gmail.com">jaywagh58@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jay-wagh-83020925a">Jay Wagh</a></p>
        <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "60px", fontSize: "0.9rem", color: "gray" }}>
        © 2025 Jay Wagh | Built with Next.js & ❤️
      </footer>
    </main>
  );
}

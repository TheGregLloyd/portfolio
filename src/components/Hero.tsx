import './Hero.css'

export default function Hero() {
  return (
    <section className="site-hero">
      <div className="site-hero-content">
        <h1>Hi, I'm George.</h1>
        <p>Computer Science student building software and AI projects.</p>
        <a href="about" className="hero-button">
          Learn more about me!
        </a>
      </div>
    </section>
  );
}


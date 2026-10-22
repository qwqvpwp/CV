export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-badge">计算机科学与技术 · 6班</div>
        <h1 className="hero-name">王汉森</h1>
        <p className="hero-desc">
          热爱编程与探索，致力于用技术解决实际问题
        </p>
        <div className="hero-info">
          <span>学号：102301616</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            查看项目
          </a>
          <a href="#contact" className="btn btn-outline">
            联系我
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>向下滚动</span>
        <div className="hero-scroll-icon" />
      </div>
    </section>
  )
}
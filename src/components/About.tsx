export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        <p className="section-subtitle">Keep Learning, Keep Building</p>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🎓</div>
            <h3>教育背景</h3>
            <p>计算机科学与技术</p>
            <p className="about-meta">6班 · 学号 102301616</p>
          </div>
          <div className="about-card">
            <div className="about-icon">💡</div>
            <h3>兴趣爱好</h3>
            <p>乒乓球 · 羽毛球</p>
            <p className="about-meta">运动让我保持活力与专注</p>
          </div>
          <div className="about-card">
            <div className="about-icon">🚀</div>
            <h3>技术热情</h3>
            <p>AI 工具开发</p>
            <p className="about-meta">擅长使用 TRAE 进行 AI 辅助开发</p>
          </div>
        </div>
      </div>
    </section>
  )
}
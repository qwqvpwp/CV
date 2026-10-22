import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'TRAE AI 开发工具', level: 90 },
  { name: '微信小程序开发', level: 80 },
  { name: 'Web 前端开发', level: 75 },
  { name: '模型训练', level: 65 },
  { name: 'API 调用与集成', level: 70 },
  { name: '语音识别', level: 60 },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <h2 className="section-title">技术栈</h2>
        <p className="section-subtitle">持续学习中，不断拓展技能边界</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: visible ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
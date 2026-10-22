import { useState } from 'react'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    id: 'baby-voice',
    title: '婴儿情绪识别小程序',
    subtitle: '从 0 到 1 的 AI 小程序',
    tags: ['小程序', '模型训练', '语音识别'],
    videos: [`${BASE}baby-voice.mp4`],
    description:
      '基于深度学习模型，通过分析婴儿哭声来识别情绪状态。集成了录音、模型推理、结果展示等完整流程，帮助新手父母更好地理解宝宝需求。',
    github: 'https://github.com/qwqvpwp/baby_voice',
    videoLayout: 'portrait',
  },
  {
    id: 'ai-memo',
    title: 'AI 归档备忘录',
    subtitle: '智能管理你的待办事项',
    tags: ['API 调用', 'Web'],
    videos: [`${BASE}memo-typhoon.mp4`, `${BASE}memo-archive.mp4`],
    description:
      '一个基于 AI 的智能备忘录应用，支持自动归档和智能分类。通过 API 调用实现自然语言处理，让待办事项管理更加高效便捷。',
    videoLayout: 'landscape',
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({})

  const handleLike = (projectId: string) => {
    setLikeCounts((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1,
    }))
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">项目经历</h2>
        <p className="section-subtitle">从想法到落地，每一个项目都是一次成长</p>
        <div className="projects-grid">
          {projects.map((project) => {
            const isActive = activeProject === project.id
            return (
              <div
                key={project.id}
                className={`project-card${isActive ? ' active' : ''}`}
                onClick={() =>
                  setActiveProject(isActive ? null : project.id)
                }
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`project-body${isActive ? ' expanded' : ''}`}
                >
                  <p className="project-desc">{project.description}</p>

                  <div
                    className={`project-videos ${
                      project.videoLayout === 'portrait'
                        ? 'layout-portrait'
                        : 'layout-landscape'
                    }`}
                  >
                    {project.videos.map((video) => (
                      <div key={video} className="video-wrapper">
                        <video
                          src={video}
                          controls
                          preload="metadata"
                          playsInline
                        >
                          您的浏览器不支持视频播放
                        </video>
                      </div>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    <button
                      className="btn btn-like"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLike(project.id)
                      }}
                    >
                      👍 {(likeCounts[project.id] || 0) > 0
                        ? likeCounts[project.id]
                        : '认可'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
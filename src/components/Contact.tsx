import { useState } from 'react'

export default function Contact() {
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const copyText = async (text: string, type: 'phone' | 'email') => {
    const setter = type === 'phone' ? setPhoneCopied : setEmailCopied
    try {
      await navigator.clipboard.writeText(text)
      setter(true)
      setTimeout(() => setter(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setter(true)
        setTimeout(() => setter(false), 2000)
      } catch {
        // ignore
      }
      document.body.removeChild(textarea)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">联系方式</h2>
        <p className="section-subtitle">期待与你的交流</p>
        <div className="contact-grid">
          <div
            className="contact-card"
            onClick={() => copyText('13305062531', 'phone')}
          >
            <div className="contact-icon">📱</div>
            <h3>电话</h3>
            <p className="contact-value">13305062531</p>
            <span className="contact-hint">
              {phoneCopied ? '已复制 ✓' : '点击复制'}
            </span>
          </div>
          <div
            className="contact-card"
            onClick={() => copyText('1852920243@qq.com', 'email')}
          >
            <div className="contact-icon">📧</div>
            <h3>邮箱</h3>
            <p className="contact-value">1852920243@qq.com</p>
            <span className="contact-hint">
              {emailCopied ? '已复制 ✓' : '点击复制'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
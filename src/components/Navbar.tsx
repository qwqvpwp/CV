interface NavbarProps {
  scrolled: boolean
}

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          王汉森
        </a>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
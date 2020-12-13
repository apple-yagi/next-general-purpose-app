import Link from 'next/link'
import '../../../styles/common/layouts/Header.module.css'

export default function Header() {
  return (
    <div className="header">
      <div className="header-body">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/discussion">
          <a>Discussion</a>
        </Link>
      </div>
    </div>
  )
}
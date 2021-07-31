import styles from '@styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar({ }) {
  return <nav className={styles.navbar}>
  <Link href="/"><a>Home</a></Link>
  <Link href="/about"><a>About</a></Link>
  </nav>
}

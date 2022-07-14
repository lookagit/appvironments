import { setDefaultResultOrder } from 'dns'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


function Footer() {
  return (
    <div className={styles.footer}>
    <div className={styles.footer_nav}>
      <h2>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>Managed development</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>Pricing</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>Quick fix</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>Our woork</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>App builder</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>App builder</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>Marketplace</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>About Us</a>
          </Link>
        </div>
        <div className={styles.footer_nav_item}>
          <Link href="/">
          <a>Log in</a>
          </Link>
        </div>               
      </h2>
    </div>
      <div className={styles.footer_image}>
       <img src="https://i.ibb.co/HpXLH0B/footer-logo.png" alt="footer-logo"></img>
      </div>
    </div>
  )
}



export default Footer
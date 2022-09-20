import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeBackground>
        {/* Inser here page */}
      </HomeBackground>
    </div>
  )
}

export default Home

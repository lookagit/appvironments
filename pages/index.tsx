import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import styles from '../styles/Home.module.css'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeBackground>
        {/* Inser here page */}
      <HomePageIdeaPicture/>
      </HomeBackground>
    </div>
  )
}

export default Home

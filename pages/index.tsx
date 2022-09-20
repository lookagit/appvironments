import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'
import HomePageCardButton from '../components/HomePageCardButton'


const Home: NextPage = () => {
  return (
    <div className="">
      <HomeBackground>
        {/* Inser here page */}
          <HomePageCardButton/>
          <HomePageIdeaPicture/>
      </HomeBackground>
    </div>
  )
}

export default Home

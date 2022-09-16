import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'
import HomePageCardButton from '../components/HomePageCardButton'
import HomePageElementText from '../components/HomePageElementText'


const Home: NextPage = () => {
  return (
    <div className="">
      <HomeBackground>
        {/* Inser here page */}
          <HomePageElementText/>
          <HomePageCardButton/>
          <HomePageIdeaPicture/>
      </HomeBackground>
    </div>
  )
}

export default Home

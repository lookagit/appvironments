import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'
import HomePageCardButton from '../components/HomePageCardButton'
import HomePageElementText from '../components/HomePageElementText'
import HomePageElementButton from '../components/HomePageElementButton'


const Home: NextPage = () => {
  return (
    <div className="">
      <HomeBackground>
        {/* Inser here page */}
          <HomePageElementButton/>
          <HomePageElementText/>
          <HomePageIdeaPicture/>
          <HomePageCardButton/>
          <HomePageElementText/>
      </HomeBackground>
    </div>
  )
}

export default Home

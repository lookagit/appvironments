import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'
import HomePageCardButton from '../components/HomePageCardButton'
import HomePageElementText from '../components/HomePageElementText'
import HomePageElementButton from '../components/HomePageElementButton'
import InitialHomePageElement from '../components/InitialHomePageElement'
import HomePageBoxButton from '../components/HomePageBoxButton'


const Home: NextPage = () => {
  return (
    <div className="">
      <HomeBackground>
        {/* Inser here page */}
          <InitialHomePageElement/>
          <HomePageCardButton/>
          <HomePageIdeaPicture/>
          <HomePageBoxButton/>
          <HomePageElementText/>
          <HomePageElementButton/>
          <HomePageElementText/>
      </HomeBackground>
    </div>
  )
}

export default Home

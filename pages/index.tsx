import type { NextPage } from 'next'
import HomeBackground from '../components/HomeBackground'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'
import HomePageCardButton from '../components/HomePageCardButton'
import HomePageElementText from '../components/HomePageElementText'
import HomePageElementButton from '../components/HomePageElementButton'
import InitialHomePageElement from '../components/InitialHomePageElement'
import HomePageBoxButton from '../components/HomePageBoxButton'
import HomePageCardButtonBig from '../components/HomePageCardButtonBig'
import HomePageForm from '../components/HomePageForm'
import HomePagePhones from '../components/HomePagePhones'


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
          <HomePageCardButtonBig/>
          <HomePageElementText/>
          <HomePagePhones/>
          <HomePageForm/>
      </HomeBackground>
    </div>
  )
}

export default Home

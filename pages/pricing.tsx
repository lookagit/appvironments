import type { NextPage } from 'next'
import PricingBackground from '../components/PricingBackground'
import HomePageIdeaPicture  from '../components/HomePageIdeaPicture'
import HomePageCardButton from '../components/HomePageCardButton'
import HomePageElementText from '../components/HomePageElementText'
import HomePageElementButton from '../components/HomePageElementButton'
import InitialHomePageElement from '../components/InitialHomePageElement'
import HomePageBoxButton from '../components/HomePageBoxButton'
import HomePageCardButtonBig from '../components/HomePageCardButtonBig'
import HomePageForm from '../components/HomePageForm'
import HomePagePhones from '../components/HomePagePhones'
import HomePageElementTextTwo from '../components/HomePageElementTextTwo'
import InitialPricingPageElement from '../components/InitialPricingPageElement'

const Pricing: NextPage = () => {
  return (
    <div className="">
      <PricingBackground>
        {/* Inser here page */}
        <InitialPricingPageElement/>
      </PricingBackground>
    </div>
  )
}

export default Pricing

import HeroSection from '../containers/HeroSection'
import Categories from '../containers/categories'
import Collections from '../containers/Collections'
import Deals from '../containers/Deals'
import ShopFeatures from '../containers/shopFeatures'

export default function Home() {
  
  return (
    <>
      <HeroSection/>
      <Categories />
      <Collections />
      <Deals />
      <ShopFeatures/>
    </>
  )
}

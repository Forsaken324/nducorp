import Intro from "../components/Intro"
import ExclusiveOffer from "./ExclusiveOffer"
import FeaturedHotels from "./FeaturedHotels"

const Home = () => {
  return (
    <div>
        <Intro />
        <FeaturedHotels />
        <ExclusiveOffer />
    </div>
  )
}

export default Home
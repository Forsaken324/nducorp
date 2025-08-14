import { ArrowRight } from 'lucide-react'
import type { ExclusiveOfferProp } from '../interfaces/interface'

const ExclusiveOfferCard = ({offer}: ExclusiveOfferProp) => {
  return (
    <div className="bg-black/10 lg:w-[373px] h-[225px] rounded rounded-lg text-white flex flex-col justify-evenly bg-cover bg-center bg-blend-overlay py-3 pl-5" style={{backgroundImage: `url(${offer.image})`}}>
        <div className='rounded rounded-full w-[65px] h-[25px] text-black flex items-center justify-center bg-white'>
            <p className='outfit text-[12px]'>{offer.priceOff}% OFF</p>
        </div>
        <div>
            <p className='text-[20px] play-fair'>Summer Escape Package</p>
            <p className='text-[14px] inter'>Enjoy a complimentary night and daily breakfast</p>
        </div>
        <p className='text-gray-300 inter text-[12px]'>Expires {offer.expiryDate}</p>
        <div className='flex gap-2'>
            <p>View Offers</p>
            <ArrowRight />
        </div>
    </div>
  )
}

export default ExclusiveOfferCard 
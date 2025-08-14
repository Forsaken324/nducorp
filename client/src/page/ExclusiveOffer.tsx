import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { exclusiveOffers } from '../assets/assets'

import ExclusiveOfferCard from '../components/ExclusiveOfferCard'
import type { ExclusiveOfferI } from '../interfaces/interface'

const ExclusiveOffer = () => {
    const [offers, setOffers] = useState<ExclusiveOfferI[] | null>(null);
    
    const getOffers = async () => {
        setOffers(exclusiveOffers);
    };

    useEffect(() => {
        getOffers();
    }, []);

  return (
    <div className='play-fair flex flex-col gap-2 items-center mt-40'>
        <div className='flex items-center justify-center xl:justify-start 2xl:gap-45 pb-20'>
            <div className='md:w-[70%] flex flex-col items-center md:block'>
                <h2 className='text-[40px] text-primary'>Exclusive Offers</h2>
                <p className='outfit text-[16px] text-gray-400 mt-5 w-[70%] xl:w-[80%] text-justify'>Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
            </div>
            <div className='flex gap-5 items-center hidden md:flex'>
                <p className='text-[14px] text-gray-800 outfit'>View All Offers</p>
                <img src={assets.arrowIcon} alt="arrow right" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-7 pb-20 px-5'>
            {offers ? (
                offers.map((offer, index) => (
                    <ExclusiveOfferCard key={index} offer={offer} />
                ))
            ) : (
                <p>Sorry no exclusive offers today.</p>
            )}
        </div>
    </div>
  )
}

export default ExclusiveOffer
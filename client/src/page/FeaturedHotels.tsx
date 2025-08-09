import { useEffect, useState } from "react";
import type { HotelRoom } from "../interfaces/interface";
import { roomsDummyData } from "../assets/assets";
import Loading from "../components/fallbacks/Loading";
import HotelCard from "../components/HotelCard";
import { NavLink } from "react-router-dom";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState<HotelRoom[] | null>(null);
  const getHotel = async () => {
    setHotels(roomsDummyData);
  };
  useEffect(() => {
    getHotel();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-featured-color">
      <h2 className="text-black text-[40px] font-bold play-fair mt-[90px]">
        Featured Hotels
      </h2>
      <p className="text-gray-400 text-sm px-5 md:px-0">
        Discover our handpicked selection of exceptional properties around the
        world, offering unparalled luxury and unforgettable experiences
      </p>
      {hotels ? (
        <>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20">
            {hotels.map((hotel, index) => (
              <HotelCard key={index} hotel={hotel} />
            ))}
          </div>
          <NavLink to={'/hotels'} className={'bg-white block border border-gray-400 flex items-center justify-center mt-20 mb-10 h-[36px] w-[136px] hover:bg-primary hover:text-white duration-300 ease-in hover:border-0'} >View more</NavLink>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FeaturedHotels;

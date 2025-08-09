import { useEffect, useRef } from "react";
import type { HotelRoomProp } from "../interfaces/interface";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }: HotelRoomProp) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const hotelImageRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (hotelImageRef?.current) {
      hotelImageRef.current.style.backgroundImage = `url(${hotel.images[0]})`;
    }
  }, []);

  return (
    <div className="w-[275px] rounded rounded-lg shadow-xl/30" onClick={() => navigate(`/hotels/${hotel.hotel._id}/${hotel._id}`)}>
      <div
        className="h-[183.48px] w-[275px] rounded rounded-t-lg bg-center bg-cover"
        ref={hotelImageRef}
      ></div>
      <div className="flex items-start justify-between px-3 mt-5">
        <div>
          <p className="text-[20px] play-fair text-black">{hotel.hotel.name}</p>
          <div className="text-gray-400 text-sm flex gap-1">
            <img src={assets.locationIcon} alt="location icon" />
            <p>{hotel.hotel.city}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center mt-[0.5px]">
          <img src={assets.starIconFIlled} alt="" />
          <p>{hotel.rating}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-3 mt-3 pb-2">
        <p className="text-gray-400 text-[14px]">
          <span className="text-black text-[20px]">
            {currency}
            {hotel.pricePerNight}
          </span>
          /night
        </p>
        <button className="h-[36px] w-[108px] rounded rounded-base border border-gray-400 text-black hover:bg-primary hover:text-white duration-300 ease-in hover:border-0" onClick={() => navigate(`/hotels/${hotel.hotel._id}/${hotel._id}`)} >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HotelCard;

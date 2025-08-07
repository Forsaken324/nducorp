import { useEffect, useRef } from "react";
import type { HotelRoomProp } from "../interfaces/interface";
import { NavLink } from "react-router-dom";
import { StarIconFilled } from "../assets/assets";

const HotelCard = ({ hotel }: HotelRoomProp) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const hotelImageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (hotelImageRef?.current) {
      hotelImageRef.current.style.backgroundImage = `url(${hotel.images[0]})`;
    }
  }, []);

  return (
    <div className="w-[275px] h-[336.15px] rounded rounded-lg shadow shadow-lg">
      <div
        className="h-[183.48px] w-[275px] rounded rounded-t-lg bg-center bg-cover"
        ref={hotelImageRef}
      ></div>
      <div>
        <div></div>
        <p>
          <StarIconFilled />
        </p>
      </div>
      <div>
        <p className="text-gray-400 text-[14px]">
          <span className="text-black text-[20px]">
            {currency}
            {hotel.pricePerNight}
          </span>
          /night
        </p>
        <NavLink
          to={"/hotel"}
          className={
            "h-[36px] w-[108px] rounded rounded-base border border-gray-400 text-black"
          }
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default HotelCard;

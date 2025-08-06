import { SearchIcon } from "lucide-react";
import {motion} from "motion/react"
import { useRef, useState } from "react";
import { assets } from "../assets/assets";
import { formatDate } from "../lib/formatDate";

const Intro = () => {
  const date = new Date();

  const [destination, setDestination] = useState('');
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState<string>(date.toDateString());
  const [checkOut, setCheckOut] = useState<string>(date.toDateString());

  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkOutRef = useRef<HTMLInputElement | null>(null);

  const handleSearchHotel = () => {

  }

  return (
    <motion.div className="flex items-center pl-[100px] h-[1050px] w-[100%] bg-[url('/heroImage.png')] bg-no-repeat bg-cover">
      <div>
        <div className="flex items-center px-3 bg-blue-400/30 w-fit h-[32px] text-white rounded rounded-full">
          The Ultimate Hotel Experience
        </div>
        <h1 className="text-white text-[60px] w-[598px] font-bold play-fair">
          Discover Your Perfect Getaway Destination
        </h1>
        <p className="text-white w-[475px] mb-10 mt-5">
          Unparalleled luxury and comfort await at the world's most executive
          botels and resorts. Start your journey today.
        </p>
        <div className="w-[824px] h-[65px] bg-white text-black rounded rounded-base text-gray-400">
          <form method="post" className="flex">
            <div>
              <label htmlFor="destination" className="flex"><img src={assets.locationIcon} alt="location icon" /> Destination</label>
              <select name="destination" id="destination" className="w-auto text-black">
                <option value="nigeria" selected>Nigeria</option>
                <option value="dubai">Dubai</option>
                <option value="usa">USA</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="china">China</option>
              </select>
            </div>
            <div>
              <label htmlFor="checkin" className="flex"><img src={assets.calenderIcon} alt="calendar" /> Check in</label>
              <input type="date" id="checkin" required hidden />
              <p className="text-black">{formatDate(checkIn)}</p>
            </div>
            <div>
              <label htmlFor="checkout" className="flex"><img src={assets.calenderIcon} alt="calendar icon" /> Check out</label>
              <input type="date" id="checkout" required hidden />
              <p className="text-black">{formatDate(checkOut)}</p>
            </div>
            <div>
              <label htmlFor="guests">Guests</label>
              <input type="number" id="guests" required className="w-[43px] text-black" />
            </div>
            <button className="flex items-center justify-center gap-3 w-[114px] h-[38px] rounded rounded-base bg-primary text-white"><SearchIcon height={15} />Search</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;

import { SearchIcon } from "lucide-react";
import {motion} from "motion/react"
import { useRef, useState, type RefObject } from "react";
import { assets } from "../assets/assets";
import { formatDate } from "../lib/formatDate";

const Intro = () => {
  const date = new Date();

  const [destination, setDestination] = useState('nigeria');
  const [guests, setGuests] = useState<Number>(1);
  const [checkIn, setCheckIn] = useState<string>(date.toDateString());
  const [checkOut, setCheckOut] = useState<string>(date.toDateString());

  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkOutRef = useRef<HTMLInputElement | null>(null);

  const openPicker = (ref: RefObject<HTMLInputElement | null>) => {
    ref.current?.showPicker();
  }


  const handleSearchHotel = () => {

  }

  return (
    <motion.div className="flex items-center md:pl-[30px] lg:pl-[100px] h-[1050px] w-[100%] bg-[url('/heroImage.png')] bg-no-repeat bg-cover">
      <div className="px-5">
        <div className="flex items-center px-3 bg-blue-400/30 w-fit h-[32px] text-white rounded rounded-full">
          The Ultimate Hotel Experience
        </div> 
        <h1 className="text-white text-[40px] md:text-[60px] md:w-[598px] font-bold play-fair">
          Discover Your Perfect Getaway Destination
        </h1>
        <p className="text-white md:w-[475px] mb-10 mt-5">
          Unparalleled luxury and comfort await at the world's most executive
          botels and resorts. Start your journey today.
        </p>
        <div className="md:w-[824px] md:h-[65px] bg-white text-black rounded rounded-base text-gray-400">
          <form method="post" className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-evenly py-2 px-4">
            <div>
              <label htmlFor="destination" className="flex gap-1"><img src={assets.locationIcon} alt="location icon" /><span> Destination</span></label>
              <select name="destination" id="destination" className="w-auto text-black outline-yellow-500/50" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="nigeria" selected>Nigeria</option>
                <option value="dubai">Dubai</option>
                <option value="usa">USA</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="china">China</option>
              </select>
            </div>
            <div>
              <label htmlFor="checkin" className="flex gap-1"><img src={assets.calenderIcon} alt="calendar" /><span> Check in</span></label>
              <input type="date" id="checkin" required hidden ref={checkInRef} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              <p className="text-black cursor-pointer" onClick={() => openPicker(checkInRef)}>{formatDate(checkIn)}</p>
            </div>
            <div>
              <label htmlFor="checkout" className="flex gap-1"><img src={assets.calenderIcon} alt="calendar icon" /><span> Check out</span></label>
              <input type="date" id="checkout" required hidden ref={checkOutRef} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              <p className="text-black cursor-pointer" onClick={() => openPicker(checkOutRef)}>{formatDate(checkOut)}</p>
            </div>
            <div className="flex gap-7">
              <div>
                <label htmlFor="guests">Guests</label><br />
                <input type="number" id="guests" required className="w-[43px] text-black rounded outline-yellow-500/50" value={guests as number} onChange={(e) => setGuests(Number(e.target.value) < 0 ? 0 : Number(e.target.value))}/>
              </div>
              <button className="flex items-center justify-center gap-3 w-[114px] h-[38px] rounded rounded-base bg-primary text-white"><SearchIcon height={15} />Search</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;

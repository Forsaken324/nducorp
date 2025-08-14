import { SearchIcon } from "lucide-react";
import {motion} from "motion/react"
import { useRef, useState, type RefObject } from "react";
import { assets } from "../assets/assets";
import { formatDate } from "../lib/formatDate";

import DatePicker from "react-datepicker";
import type { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Intro = () => {
  const date = new Date();

  const [destination, setDestination] = useState('nigeria');
  const [guests, setGuests] = useState<Number>(1);
  const [checkIn, setCheckIn] = useState<Date>(date);
  const [checkOut, setCheckOut] = useState<Date>(date);

  // const checkInRef = useRef<ReactDatePickerCustomHeaderProps | null>(null);
  // const checkOutRef = useRef<ReactDatePickerCustomHeaderProps | null>(null);

  // const openPicker = (ref: RefObject<HTMLInputElement | null>) => {
  //   ref.current?.showPicker();
  // }

  const handleSetCheckout = (date: Date | null) => {
    if (date) {
      setCheckOut(date);
    }
  }

  const handleSetCheckin = (date: Date | null) => {
    if (date) {
      setCheckIn(date);
    }
  }

  return (
    <motion.div className="flex items-center md:pl-[30px] lg:pl-[100px] h-[1050px]  bg-[url('/heroImage.png')] bg-no-repeat bg-cover">
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
        <div className="lg:w-[824px] md:h-[65px] py-3 md:py-0 bg-white text-black rounded rounded-base text-gray-400">
          <form method="post" className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-evenly py-2 px-4">
            <div>
              <label htmlFor="destination" className="flex gap-1"><img src={assets.locationIcon} alt="location icon" /><span> Destination</span></label>
              <select name="destination" id="destination" className="w-auto text-black outline-yellow-500/50 appearance-none" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="nigeria" selected>Nigeria</option>
                <option value="dubai">Dubai</option>
                <option value="usa">USA</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="china">China</option>
              </select>
            </div>
            <div>
              <label htmlFor="checkin" className="flex gap-1"><img src={assets.calenderIcon} alt="calendar" /><span> Check in</span></label>
              <DatePicker selected={checkIn} onChange={handleSetCheckin} dateFormat={"MMMM d, yyyy"} className="text-black w-[150px]"/>
              {/* <p className="text-black cursor-pointer">{formatDate(checkIn.toDateString())}</p> */}
            </div>
            <div>
              <label htmlFor="checkout" className="flex gap-1"><img src={assets.calenderIcon} alt="calendar icon" /><span> Check out</span></label>
              <DatePicker selected={checkOut} onChange={handleSetCheckout} dateFormat={"MMMM d, yyyy"} className="text-black w-[150px]" />
              {/* <p className="text-black cursor-pointer" onClick={() => checkOutRef.current.setFocus()}>{formatDate(checkOut.toDateString())}</p> */}
            </div>
            <div className="flex flex-col md:flex-row gap-7">
              <div>
                <label htmlFor="guests">Guests</label><br />
                <input type="number" id="guests" required className="w-[43px] text-black rounded outline-yellow-500/50" value={guests as number} onChange={(e) => setGuests(Number(e.target.value) < 0 ? 0 : Number(e.target.value))}/>
              </div>
              <button className="flex items-center justify-center lg:gap-3 w-[114px] h-[38px] rounded rounded-base bg-primary text-white"><SearchIcon height={15} />Search</button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;

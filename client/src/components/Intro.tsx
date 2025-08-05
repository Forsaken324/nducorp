import { SearchIcon } from "lucide-react";
import {motion} from "motion/react"

const Intro = () => {
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
        <div className="w-[824px] h-[65px] bg-white text-black rounded rounded-base">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <button className="flex items-center justify-center gap-3 w-[114px] h-[38px] rounded rounded-base bg-primary text-white"><SearchIcon height={15} />Search</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;

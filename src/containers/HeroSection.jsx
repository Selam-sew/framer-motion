import { NavLink } from "react-router-dom";
import style from "./HeroSection.module.css";
export default function HeroSection() {
  return (
    <div
      className={`${style.HeroSection} mt-3  text-[#35374B] text-center mx-5 `}
    >
      <div>
        <h1 className="pb-9 text-[2.3rem] md:text-[4rem] font-semibold pt-10 mx-5]">
          Unleash Innovation in Every Byte.
        </h1>
        <p className="text-[1.2rem] mx-2 md:text-[1.5rem] md:mb-5">
          Explore a World of Cutting-Edge Tech
        </p>
        <NavLink to="/shop">
          {" "}
          <button className="border-2 mt-5 mb-5 md:mb-10 bg-black text-white border-black rounded-lg p-2 px-7 md:text-[1.2rem]">
            Shop Now
          </button>
        </NavLink>
      </div>{" "}
    </div>
  );
}

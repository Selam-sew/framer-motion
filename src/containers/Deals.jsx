import { NavLink } from "react-router-dom";
import deal from "../../public/admin/deal.png";
import arrow from "../../public/assets/icons/arrow-narrow-right.svg";
import { useState, useEffect } from "react";

export default function Deals() {
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(59);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const Second = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 0) {
          setMinute((prevMinute) => {
            if (prevMinute === 0) {
              setHour((prevHour) => prevHour - 1);
              return 59;
            }
            return prevMinute - 1;
          });
          return 59;
        }
        return prevSecond - 1;
      });
    }, 1000);

    return () => clearInterval(Second);
  }, [hour]);
  return (
    <div className="mx-[2rem] mt-10 sm:mx-[4rem] sm:mt-[7rem]">
      <h1 className="text-[1.5rem] font-semibold mb-3">Deals Of The Day</h1>
      <div className="grid md:grid-cols-2 gap-5 xl:gap-[12rem] ">
        <div className="mb-5">
          <p>
            Don't miss out on our exclusive deal of the Day! Get the latest tech
            at unbeatable prices.
          </p>

          <div className="flex gap-5 mt-7">
            <span className="font-extrabold">
              {hour} <p className="font-semibold">hours</p>{" "}
            </span>{" "}
            <span className="font-extrabold">
              {" "}
              {minute} <p className="font-semibold"> minutes</p>
            </span>{" "}
            <span className="font-extrabold">
              {" "}
              {second} <p className="font-semibold">seconds</p>
            </span>
          </div>

          <NavLink to="/shop">
            <button className="bg-black md:mt-10 md:text-[1.3rem] items-center  flex text-white rounded-sm px-2 py-1 mt-3">
              View Products <img src={arrow} className="pl-2" alt="" />{" "}
            </button>
          </NavLink>
        </div>

        <img className="rounded-md" src={deal} alt="" />
      </div>
    </div>
  );
}

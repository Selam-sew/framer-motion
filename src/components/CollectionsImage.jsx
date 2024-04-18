import { NavLink } from "react-router-dom";
import { useCart } from '../context/CartContext'
import { useContext } from "react";
import Detail from "../context/DetailsContext";

export default function CollectionsImage({ image, title, Description, Price }) {
  const { addToCart } = useCart();
  const { setDetails } = useContext(Detail)
  
  const item = { image, title, Description, Price }
  
  return (


    <div className="bg-[#E6E5E5] text-left p-2 lg:px-10 py-5 flex flex-col justify-between">
      {" "}
      <div>
        <NavLink to='/details' onClick={()=>setDetails(item)}>
                  <img src={image} alt="product image" />

        </NavLink>
        <h3 className="font-semibold mb-5 lg:text-[1.1rem]">{title}</h3>

        <p className="text-[#5c5353] sm:text-[1.1rem]">{Description}</p>
      </div>
      <div className="flex justify-between mt-5 flex-col md:flex-row gap-3 ">
        <p className=" ">{Price}$</p>
        <NavLink to='/cart'>
          <button className="bg-black text-white px-2 rounded-sm py-1" onClick={()=> addToCart(item)} >
            Buy Now{" "}
          </button>
        </NavLink>
      </div>
    </div>  

  );
}

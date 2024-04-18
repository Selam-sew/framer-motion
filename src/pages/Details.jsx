import { useContext, useState } from "react";
import Detail from "../context/DetailsContext";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
const Details = () => {
  const { details } = useContext(Detail);
 const [ detailsArray, setDetailsArray] = useState([])
  const { addToCart } = useCart();
  const handleAddToCart =() => {
    setDetailsArray([...detailsArray, details])
    addToCart(details)
  }
  return (
    <div className="mt-12 i flex mb-[9rem] ">
      <img className="" width={400} src={details.image} alt="" />
      <div className="">
        <p className="font-semibold mb-4 text-[1.3rem]">{details.title}</p>
        <p>{details.Description}</p>
        <p className="font-semibold">{details.Price}$</p>
        <NavLink to="/cart">
          <button
            className="bg-black text-white rounded-sm px-2 mt-4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Details;

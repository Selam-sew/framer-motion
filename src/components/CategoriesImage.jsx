import { NavLink } from "react-router-dom";

export default function CategoriesImage({ image, type }) {
  return (
    <div className="text-center flex flex-col items-center ">
      <div className="w-100">
        <img src={image} alt="" className="" />
      </div>
      <NavLink className='mb-2' to="/shop">
        <p className="m-2 bg-white rounded-sm px-5 lg:px-10  py-2 "> {type} </p>
      </NavLink>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import CategoriesImage from "../components/CategoriesImage";
import accessory from "../../public/admin/categories/accessories-category.png";
import ipads from "../../public/admin/categories/ipads-category.png";
import phones from "../../public/admin/categories/phones-category.png";
import Tv from "../../public/admin/categories/tv-home-category.png";
import watches from "../../public/admin/categories/watches-category.png";
import Laptop from "../../public/admin/categories/laptops-category.png";

let categoriesData = [
  { image: accessory, type: "Accessories" },
  { image: Laptop, type: "Laptops" },
  { image: ipads, type: "Ipads" },
  { image: phones, type: "Phones" },
  { image: Tv, type: "TV & Home" },
  { image: watches, type: "Watches" },
];

export default function categories() {
  return (
    <>
      <div className="flex justify-between mx-[2rem]  items-center  sm:mt-12 sm:mx-[4rem] mt-8">
        <h2 className="text-[1.5rem] ">Shop By Categories</h2>
        <NavLink to="/shop">Show All</NavLink>
      </div>

      <div className="grid grid-cols-1 mx-[2rem]  ssm:grid-cols-2 md:grid-cols-3  gap-5 sm:gap-10 sm:mx-[4rem] mt-5">
        {categoriesData.map((item) => (
            <div key={item.id} className="bg-[#E6E5E5]"  >
            <CategoriesImage image={item.image} type={item.type} />
          </div>
        ))}
      </div>
    </>
  );
}

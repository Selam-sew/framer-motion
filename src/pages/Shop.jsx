import { useContext, useEffect, useState } from "react";
import ipad from "../../public/admin/products/11-inch-ipad-pro-512gb-space-gray.png";
import macbook from "../../public/admin/products/13-inch-macbokk-air-256gb-space-gray.png";
import macPro from "../../public/admin/products/14-inch-macbook-pro-12-core-1tb-space-black.png";
import macair from "../../public/admin/products/15-inch-macbook-air-2tb-midnight.png";
import airpods from "../../public/admin/products/airpods-max.png";
import airpodpro from "../../public/admin/products/airpods-pro-2nd-generation.png";
import applaIpad from "../../public/admin/products/apple-ipad-air-256gb-purple.png";
import appleIphone from "../../public/admin/products/apple-iphone-14-128gb-blue.png";
import appleIphone2 from "../../public/admin/products/apple-iphone-15-pro-1tb-blue-titanium.png";
import appleIphone3 from "../../public/admin/products/apple-iphone-15-pro-max-256gb-natural-titanium.png";
import applePencil from "../../public/admin/products/apple-pencil-1st-generation.png";
import appleTv from "../../public/admin/products/apple-tv-4k-wifi.png";
import appleWatch from "../../public/admin/products/apple-watch-series-9-aluminum.png";
import appleWatchUltra from "../../public/admin/products/apple-watch-ultra-2.png";
import silver from "../../public/admin/products/silver-lamicall-adjustable-laptop-riser.png";
import arrowRight from "../../public/assets/icons/arrow-right.svg";
import arrowLeft from "../../public/assets/icons/arrow-left.svg";
import CollectionsImage from "../components/CollectionsImage";
import PaginationContext from "../context/PaginationContext";

let CollectionsData = [
  {
    image: ipad,
    title: "11-inch iPad Pro 512GB Space Gray",
    description:
      "The 11-inch iPad Pro features an immersive, edge-to-edge Liquid Retina display.",
    price: "799.00",
    category: "ipad",
  },
  {
    image: macbook,
    title: "13-inch Macbook Air 256GB Space Gray",
    description:
      "The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.",
    price: "999.00",
    category: "laptop",
  },
  {
    image: macPro,
    title: "14-inch Macbook Pro 12-Core 1TB Space Black",
    description:
      "The 14-inch MacBook Pro features a stunning Retina display with over 5 million pixels.",
    price: "1999.00",
    category: "laptop",
  },
  {
    image: macair,
    title: "15-inch Macbook Air 2TB Midnight",
    description:
      "The 15-inch MacBook Air features a Retina display, Touch ID, a Magic Keyboard, and all-day battery life.",
    price: "2499.00",
    category: "laptop",
  },
  {
    image: airpods,
    title: "AirPods Max",
    description: "AirPods Max reimagine over-ear headphones.",
    price: "549.00",
    category: "accessory",
  },
  {
    image: airpodpro,
    title: "AirPods Pro 2nd Generation",
    description:
      "AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound.",
    price: "249.00",
    category: "accessory",
  },
  {
    image: applaIpad,
    title: "Apple iPad Air 256GB Purple",
    description:
      "The all-new iPad Air features an all-screen design with a 10.9-inch Liquid Retina display.",
    price: "599.00",
    category: "ipad",
  },
  {
    image: appleIphone,
    title: "Apple iPhone 14 128GB Blue",
    description: "The iPhone 14 features a 6.1-inch Super Retina XDR display.",
    price: "699.00",
    category: "phone",
  },
  {
    image: appleIphone2,
    title: "Apple iPhone 15 Pro 1TB Blue Titanium",
    description:
      "The iPhone 15 Pro features a 6.1-inch Super Retina XDR display.",
    price: "999.00",
    category: "phone",
  },
  {
    image: appleIphone3,
    title: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    description:
      "The iPhone 15 Pro Max features a 6.7-inch Super Retina XDR display.",
    price: "1099.00",
    category: "phone",
  },
  {
    image: applePencil,
    title: "Apple Pencil 1st Generation",
    description:
      "The Apple Pencil delivers pixel-perfect precision and industry-leading low latency.",
    price: "99.00",
    category: "accessory",
  },
  {
    image: appleTv,
    title: "Apple TV 4K WiFi",
    description:
      "The Apple TV 4K delivers a stunning cinematic experience at home.",
    price: "179.00",
    category: "Tv",
  },
  {
    image: appleWatch,
    title: "Apple Watch Series 9 Aluminum",
    description:
      "The Apple Watch Series 9 features a stunning new design and a larger display.",
    price: "399.00",
    category: "watch",
  },
  {
    image: appleWatchUltra,
    title: "Apple Watch Ultra 2",
    description:
      "The Apple Watch Ultra 2 features a new design and a larger display.",
    price: "499.00",
    category: "watch",
  },
  {
    image: silver,
    title: "Silver Lamicall Adjustable Laptop Riser",
    description:
      "The Silver Lamicall Adjustable Laptop Riser is designed to elevate your laptop to a comfortable and ergonomic viewing height.",
    price: "29.99",
    category: "accessory",
  },
];

export default function Shop() {
  const [currentPosts, setCurrentPosts] = useState([]);
  const [selectedCategory, setSelectedcategory] = useState(null);

  const { currentPage, postPerPage, SetCurrentPage, SetPostPerPage } =
    useContext(PaginationContext);

  useEffect(() => {
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    setCurrentPosts(CollectionsData.slice(firstPostIndex, lastPostIndex));
    SetPostPerPage(9);
  }, [postPerPage, currentPage]);

  const handleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedcategory(null);
      setCurrentPosts(CollectionsData);
    } else {
      setSelectedcategory(category);

      const filteredItems = CollectionsData.filter(
        (items) => items.category.toLowerCase() === category.toLowerCase()
      );
      setCurrentPosts(filteredItems);
    }
  };
  const handleRightClick = () => {
    if (currentPage < 2) {
      SetCurrentPage(currentPage + 1);
      setSelectedcategory(null);
    }
  };

  const handleLeftClick = () => {
    if (currentPage > 1) {
      SetCurrentPage(currentPage - 1);
      setSelectedcategory(null);
    }
  };

  return (
    <section className="flex text-center md:text-left mt-10 sm:mx-[4rem] mx-10 flex-col md:flex-row">
      <div className="">
        <h1 className="font-semibold text-[rem] mb-5">Product Categories</h1>
        <div className="flex transition-all duration-[3000] ease-in gap-2 items-center md:items-start justify-center mb-4 md:flex-col md:gap-4">
          <div className="flex gap-2 ">
            <input
              type="checkbox"
              id="category1"
              name="category1"
              value="category1"
              onClick={() => handleCategory("watch")}
              checked={selectedCategory === "watch"}
            />

            <label htmlFor="category1">Watches</label>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="category2"
              name="category2"
              value="category2"
              onClick={() => handleCategory("Tv")}
              checked={selectedCategory === "Tv"}
            />
            <label htmlFor="category2">Tv & Home </label>
            <br />
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="category3"
              name="category3"
              value="category3"
              onClick={() => handleCategory("ipad")}
              checked={selectedCategory === "ipad"}
            />
            <label htmlFor="category3">Ipads</label>
            <br />
          </div>
        </div>

        <div className="flex gap-2 md:gap-4 transition-all duration-[3000] ease-in  mb-10 md:flex-col  justify-center">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="category4"
              name="category4"
              value="category4"
              onClick={() => handleCategory("accessory")}
              checked={selectedCategory === "accessory"}
            />
            <label htmlFor="category4">Accessories</label>
            <br />
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="category5"
              name="category5"
              value="category5"
              onClick={() => handleCategory("laptop")}
              checked={selectedCategory === "laptop"}
            />
            <label htmlFor="category5">Laptops</label>
            <br />
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="category6"
              name="category6"
              value="category6"
              onClick={() => handleCategory("phone")}
              checked={selectedCategory === "phone"}
            />
            <label htmlFor="category6">Phones</label>
            <br />{" "}
          </div>
        </div>
      </div>
      <div className="md:ml-20">
        {" "}
        <div className="grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3  gap-5 bg-[#E6E5E5">
          {currentPosts.map((item) => (
            <CollectionsImage
              key={item.image}
                image={item.image}
                title={item.title}
                Description={item.Description}
                Price={item.price}
              />
          ))}
        </div>
        <div className="flex mt-3 mb-[8rem] justify-center">
          <img
            onClick={handleLeftClick}
            className="pr-2 w-6 cursor-pointer"
            src={arrowLeft}
            alt=""
          />{" "}
          <p>Page {currentPage} of 2</p>{" "}
          <img
            onClick={handleRightClick}
            className="pl-2 cursor-pointer"
            src={arrowRight}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

import CollectionsImage from "../components/CollectionsImage";
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
// import applePencil from "../../public/admin/products/apple-pencil-1st-generation.png";
import appleTv from "../../public/admin/products/apple-tv-4k-wifi.png";
import appleWatch from "../../public/admin/products/apple-watch-series-9-aluminum.png";
import appleWatchUltra from "../../public/admin/products/apple-watch-ultra-2.png";
import silver from "../../public/admin/products/silver-lamicall-adjustable-laptop-riser.png";
import arrowRight from "../../public/assets/icons/arrow-right.svg";
import arrowLeft from "../../public/assets/icons/arrow-left.svg";
import PaginationContext from "../context/PaginationContext";
import {  useContext } from "react";

let CollectionsData = [
  {
    image: ipad,
    title: "11-inch iPad Pro 512GB Space Gray",
    categories:"ipads",
    description:
      "The 11-inch iPad Pro features an immersive, edge-to-edge Liquid Retina display.",
    price: "799.00",
  },
  {
    image: macbook,
    categories:'laptops',
    title: "13-inch Macbook Air 256GB Space Gray",
    description:
      "The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.",
    price: "999.00",
  },
  {
    image: macPro,
    title: "14-inch Macbook Pro 12-Core 1TB Space Black",
    categories:"laptops",
    description:
      "The 14-inch MacBook Pro features a stunning Retina display with over 5 million pixels.",
    price: "1999.00",
  },
  {
    image: macair,
    title: "15-inch Macbook Air 2TB Midnight",
    categories:"laptops",
    description:
      "The 15-inch MacBook Air features a Retina display, Touch ID, a Magic Keyboard, and all-day battery life.",
    price: "2499.00",
  },
  {
    image: airpods,
    title: "AirPods Max",
    categories:"accessories",
    description: "AirPods Max reimagine over-ear headphones.",
    price: "549.00",
  },
  {
    image: airpodpro,
    title: "AirPods Pro 2nd Generation",
    categories:"accessories",
    description:
      "AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound.",
    price: "249.00",
  },
  {
    image: applaIpad,
    title: "Apple iPad Air 256GB Purple",
    categories:"ipads",
    description:
      "The all-new iPad Air features an all-screen design with a 10.9-inch Liquid Retina display.",
    price: "599.00",
  },
  {
    image: appleIphone,
    title: "Apple iPhone 14 128GB Blue",
    categories:"phones",
    description: "The iPhone 14 features a 6.1-inch Super Retina XDR display.",
    price: "699.00",
  },
  {
    image: appleIphone2,
    title: "Apple iPhone 15 Pro 1TB Blue Titanium",
    categories:"phones",
    description:
      "The iPhone 15 Pro features a 6.1-inch Super Retina XDR display.",
    price: "999.00",
  },
  {
    image: appleIphone3,
    title: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
    categories:"phones",
    description:
      "The iPhone 15 Pro Max features a 6.7-inch Super Retina XDR display.",
    price: "999.00",
  },
// {
  //   image: applePencil,
  //   title: "Apple Pencil 1st Generation",
  //   categories:"accessories",
  //   description:
  //     "The Apple Pencil delivers pixel-perfect precision and industry-leading low latency.",
  //   price: "$99.00",
  // },
  {
    image: appleTv,
    title: "Apple TV 4K WiFi",
    categories:"accessories",
    description:
      "The Apple TV 4K delivers a stunning cinematic experience at home.",
    price: "179.00",
  },
  {
    image: appleWatch,
    title: "Apple Watch Series 9 Aluminum",
    categories:"watches",
    description:
      "The Apple Watch Series 9 features a stunning new design and a larger display.",
    price: "399.00",
  },
  {
    image: appleWatchUltra,
    title: "Apple Watch Ultra 2",
    categories:"watches",
    description:
      "The Apple Watch Ultra 2 features a new design and a larger display.",
    price: "499.00",
  },
  {
    image: silver,
    title: "Silver Lamicall Adjustable Laptop Riser",
    categories:"laptops",
    description:
      "The Silver Lamicall Adjustable Laptop Riser is designed to elevate your laptop to a comfortable and ergonomic viewing height.",
    price: "29.99",
  },
];

export default function Collections() {
  const {currentPage, postPerPage, SetCurrentPage} = useContext(PaginationContext);
  

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = CollectionsData.slice(firstPostIndex, lastPostIndex);

  const handleRightClick = () => {
    if (currentPage < 2) {
      SetCurrentPage(currentPage + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentPage > 1) {
      SetCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-10 sm:mt-[4rem] text-center mx-[2rem]  sm:mx-[4rem]">
      <h1 className="font-semibold mb-10 text-[1.6rem] ">New Collections</h1>
      <h2 className="flex my-3 ">
        Showing {firstPostIndex + 1}-{lastPostIndex} of 15 products
      </h2>

      <div className="grid grid-cols-1 ssm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#E6E5E5">
        {currentPosts.map((item) => (
          <CollectionsImage
            key={item.id}
            image={item.image}
            title={item.title}
            Description={item.description}
            Price={item.price}
          />
        ))}
      </div>

      <div className="flex mt-3 justify-center">
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
  );
}

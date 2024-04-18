import ShopFeatureImage from "../components/shopFeatureImage";
import payment from "../../public/assets/icons/payment.svg";
import dollar from "../../public/assets/icons/dollar.svg";
import shipping from "../../public/assets/icons/shipping.svg";
import support from "../../public/assets/icons/support.svg";

const featuresData = [
  {
    image: payment,
    title: "Flexible Payment",
    description: "Pay With Multiple Credit Cards."
  },
  {
    image: dollar,
    title: "Money Guarantee",
    description: "within 3 days for an exchange.",
  },
  {
    image: shipping,
    title: "Free Shipping",
    description: "Free shipping for orders above 150$",
  },
  {
    image: support,
    title: "Online Support",
    description: "24 hours a day, 7 days a week.",
  },
];

export default function shopFeatures() {
  return (
    <div className="mt-12 mb-[4rem] mx-[2rem] sm:mt-[7rem] grid grid-cols-1 ssm:grid-cols-2 sm:mx-[4rem] gap-5 md:grid-cols-4 ">
      {featuresData.map((feature, index) => (
        <ShopFeatureImage
          key={index}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}

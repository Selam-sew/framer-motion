import { useState } from "react";
import { useCart } from "../context/CartContext"; // Import useCart

export default function Cart() {
  const { cartItems } = useCart();
  const [inputValues, setInputValues] = useState(Array(cartItems.length).fill(0));

  return (
    <div className="mt-10 mx-5 sm:ml-[7rem] sm:mr-[3rem] pb-[19.2rem]">
      <h2 className="font-semibold text-[1.5rem] mb-7">Cart</h2>
      <p className="mb-3">Products</p>

      <ul className="flex flex-col gap-8">
        {cartItems.map((item, index) => (
          <div key={index.id}>
            <div className="grid gap-2 md:grid-rows-1 lg:grid-cols-4 border-b pb-2 lg:gap-10 items-center">
              <div className="flex gap-3 justify-between">
                <img src={item.image} alt="electronics-image" width={80} />
                <p className="font-semibold">{item.title}</p>
              </div>

              <div className="flex flex-col ssm:flex-row gap-2 justify-between lg:gap-[12rem] items-center">
                <div className="flex flex-col justify-center items-center">
                  <label htmlFor={`number-${index}`}>Items</label>
                  <input
                    onChange={(e) => {
                      const newInputValues = [...inputValues];
                      newInputValues[index] = e.target.value;
                      setInputValues(newInputValues);
                    }}
                    type="number"
                    placeholder=".."
                    className="border-[0.1rem]"
                  />
                </div>

                <div className="flex ssm:gap-[8rem] justify-evenly gap-12 lg:gap-[12rem]">
                  <div className="flex flex-col justify-center">
                    <p>Price</p>
                    <p>{item.Price}$</p>
                  </div>

                  <div>
                    <p>Amount</p>
                    <p className="font-semibold">{inputValues[index] * item.Price}$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

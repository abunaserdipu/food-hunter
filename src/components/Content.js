import React from "react";
import ImageOne from "../images/noodles-pasta.jpg";
import ImageTwo from "../images/italian-pizza.jpg";
import ImageThree from "../images/egg-noodles.jpg";

function Content() {
  const itemData = [
    {
      img: ImageOne,
      title: "Pasta with Seafood",
      description: "Yummy, delicious, and nutritious",
      price: "$15",
    },
    {
      img: ImageTwo,
      title: "Black Pasta",
      description: "Yummy, delicious, and nutritious",
      price: "$20",
    },
    {
      img: ImageThree,
      title: "Egg Noodles",
      description: "Yummy, delicious, and nutritious",
      price: "$10",
    },
  ];
  return (
    <>
      <div className="md:flex justify-center items-center px-5">
        {itemData.map((item) => (
          <div className="item-card">
            <img
              src={item.img}
              alt="pasta"
              className="h-full rounded mb-20 shadow"
            />
            <div className="item-text">
              <h2 className="text-2xl mb-2">{item.title}</h2>
              <p className="mb-2">{item.description}</p>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Content;

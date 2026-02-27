import React from "react";

/*
  FlavorCard receives a "flavor" object and an "onAdd" function via props.
  - Demonstrates props (we destructure the object).
  - Uses a ternary for button text based on isAdded prop (if provided).
  - Uses object destructuring: const { id, name, price, image } = flavor;
*/

export default function FlavorCard({ flavor, isAdded = false, onAdd }) {
  const { id, name, price, image, description } = flavor;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="px-4 py-3">
        <div className="font-bold text-xl mb-1">{name}</div>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Rs {price}</div>
          <button
  onClick={() => onAdd(flavor)}
  className={`px-3 py-1 rounded-md border transition duration-300 ${
    isAdded
      ? "bg-green-500 text-white"
      : "bg-white text-black hover:bg-gray-100"
  }`}
>
  {isAdded ? "Added ✓" : "Add to cart"}
</button>
        </div>
      </div>
    </div>
  );
}
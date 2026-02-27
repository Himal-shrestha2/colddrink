import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cart = [], darkMode, setDarkMode }) {

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold">Cold Drinks</h1>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold flex items-center gap-2"
                : "text-gray-700 flex items-center gap-2"
            }
          >
            <FaShoppingCart />
            Cart ({totalItems})
          </NavLink>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 px-3 py-1 rounded"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
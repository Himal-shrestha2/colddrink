import React from "react";
import flavors from "../data/flavors";
import FlavorCard from "../components/FlavorCard";

export default function Home({ cart, handleAdd }) {
  return (
    <>

      {/* FULL WIDTH HERO */}
      <section className="relative w-full h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          // playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      
      </section>
      {/* Content */}
        <div className="relative z-10 opacity-90 flex flex-col justify-center items-center h-full text-black text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Refresh Your Mood
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Discover our premium cold drink flavours crafted to energize your day.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
            Explore Flavours
          </button>
        </div>

      {/* REST OF PAGE INSIDE CONTAINER */}
      <main className="container mx-auto px-4 py-16 animate-fadeIn">
{/* Special Offer Banner */}
<section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-6 text-center">
  <h2 className="text-2xl font-bold">
    Summer Special Offer 
  </h2>
  <p className="mt-2">
    Buy 2 Drinks & Get 1 Free Limited Time Only!
  </p>
</section>
        {/* Flavours */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Our Flavours</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavors.map(flavor => (
              <FlavorCard
                key={flavor.id}
                flavor={flavor}
                isAdded={cart.some(item => item.id === flavor.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>
        </section>

{/* Ingredients Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-10">
      🌿 Fresh & Natural Ingredients
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <div>
        <h3 className="text-xl font-semibold mb-2">🍋 Fresh Citrus</h3>
        <p className="text-gray-600">Handpicked natural fruits.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">🌱 Natural Sweeteners</h3>
        <p className="text-gray-600">No artificial sugar added.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">❄️ Ice-Crafted</h3>
        <p className="text-gray-600">Perfectly chilled for refreshment.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">🚫 No Preservatives</h3>
        <p className="text-gray-600">100% clean & safe ingredients.</p>
      </div>

    </div>
  </div>
</section>

        {/* Featured Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">
      🌟 Best Sellers
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold mb-2">Mango Blast</h3>
        <p className="text-gray-600 mb-4">Our most loved tropical flavor.</p>
        <span className="text-orange-500 font-bold">Best Seller</span>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold mb-2">Lemon Spark</h3>
        <p className="text-gray-600 mb-4">Refreshing citrus energy boost.</p>
        <span className="text-yellow-500 font-bold">Trending</span>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold mb-2">Berry Chill</h3>
        <p className="text-gray-600 mb-4">Sweet & smooth berry blend.</p>
        <span className="text-purple-500 font-bold">Top Rated</span>
      </div>

    </div>
  </div>
</section>

{/* Our Story */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center max-w-3xl">
    <h2 className="text-3xl font-bold mb-6">
      🌍 Our Story
    </h2>
    <p className="text-gray-600 leading-relaxed">
      Founded in 2020, Cold Drinks Store began with one mission —
      to create refreshing beverages made from natural ingredients.
      What started as a small idea has grown into a brand loved by
      thousands of customers.
      Every bottle we craft carries passion, freshness, and quality.
    </p>
  </div>
</section>

{/* Reviews Section */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">
      ⭐ What Our Customers Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600 mb-4">
          “Absolutely refreshing and delicious!”
        </p>
        <h4 className="font-semibold">— Ayan  ⭐⭐⭐⭐⭐</h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600 mb-4">
          “Best summer drink I’ve tried this year.”
        </p>
        <h4 className="font-semibold">— Rohan ⭐⭐⭐⭐⭐</h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600 mb-4">
          “Great quality and amazing flavors!”
        </p>
        <h4 className="font-semibold">— Sara ⭐⭐⭐⭐⭐</h4>
      </div>

    </div>
  </div>
</section>


        {/* About Section */}
        <section className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our Drinks?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our cold drinks are made with high-quality ingredients and refreshing flavors.
            Perfect for every season and every mood.
            Experience natural taste with modern packaging.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2026 Cold Drinks Store</p>
        <p className="text-sm text-gray-400 mt-2">
          Made with React & Tailwind CSS
        </p>
      </footer>

    </>
  );
}
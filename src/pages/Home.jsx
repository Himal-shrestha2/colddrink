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

        {/* Content */}
        <div className="relative z-10 opacity-90 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Refresh Your Mood
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Discover our premium cold drink flavours crafted to energize your day.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Explore Flavours
          </button>
        </div>

      </section>

      {/* REST OF PAGE INSIDE CONTAINER */}
      <main className="container mx-auto px-4 py-16 animate-fadeIn">

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
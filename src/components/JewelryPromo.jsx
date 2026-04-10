// src/components/JewelryPromo.jsx
import React from 'react';

const JewelryPromo = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <div className="flex flex-col lg:flex-row">

        {/* ==================== LEFT SIDE - HERO IMAGE ==================== */}
        <div className="lg:w-1/2 relative min-h-[620px] lg:min-h-[720px] overflow-hidden">
          <img
            src={data.hero.imageUrl}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          <div className="absolute top-8 left-8">
            <h1 className="text-5xl lg:text-6xl font-black tracking-tighter text-white drop-shadow-lg">
              {data.hero.logo || "Myntra Exclusive"}
            </h1>
          </div>

          <div className="absolute bottom-8 left-8">
            <span className="text-white text-sm font-medium tracking-widest border border-white/60 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
              {data.hero.since}
            </span>
          </div>

          <div className="absolute bottom-8 right-8 max-w-xs text-white text-sm leading-relaxed drop-shadow-md">
            {data.hero.description}
          </div>
        </div>

        {/* ==================== RIGHT SIDE - 4 PRODUCT CARDS ==================== */}
        <div className="lg:w-1/2 bg-zinc-100 p-6 lg:p-10">
          <div className="grid grid-cols-2 gap-6">
            {data.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="h-60 flex items-center justify-center bg-white p-6">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105 duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-orange-600 font-bold text-xl mt-2">
                      ₹{product.price}
                    </p>
                  </div>

                  {/* Buy Now Button with Dynamic Link from JSON */}
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full bg-black hover:bg-zinc-800 text-white font-medium py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-sm tracking-wider active:scale-95"
                  >
                    BUY NOW
                    <span className="text-lg">→</span>
                  </a>
                </div>

                {/* Bottom Dots */}
                <div className="flex justify-center gap-1 pb-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryPromo;
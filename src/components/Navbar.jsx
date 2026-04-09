import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Party Ready", href: "/party-ready" },
    { name: "Couple Collection", href: "/couple-collection" },
    { name: "Mens Collections", href: "/mens-collections" },
    { name: "Women Collections", href: "/women-collections" },
    { name: "Summer Sale", href: "/summer-sale" },
    { name: "Winter Sale", href: "/winter-sale" },
  ];

  const categories = [
    { name: "Shirts", href: "/shirts" },
    { name: "Pants", href: "/pants" },
    { name: "Shoes", href: "/shoes" },
    { name: "Myntra Offers", href: "/myntra-offers" },
    { name: "Flipkart Offers", href: "/flipkart-offers" },
    { name: "Meshoo Offers", href: "/meshoo-offers" },
    { name: "Under 200", href: "/under-200" },
    { name: "Under 500", href: "/under-500" },
    { name: "Under 1000", href: "/under-1000" },
    { name: "Under 2000", href: "/under-2000" },
    { name: "Watches", href: "/watches" },
    { name: "Sunglasses", href: "/sunglasses" },
  ];

  return (
    <div className="w-full border-b bg-white">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO → Home */}
        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-orange-500 transition">
          PackTrack
        </Link>


        {/* NAV LINKS (Desktop) */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded-full border hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-600 font-medium border-t">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* CATEGORY PILLS */}
      <div className="flex gap-3 overflow-x-auto px-6 pb-4">
        {categories.map((cat, i) => (
          <Link
            key={i}
            to={cat.href}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition bg-white text-gray-600 hover:bg-gray-100"
          >
            <span className="text-orange-500 font-bold">#</span>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

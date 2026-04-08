import { useState } from "react";
import {
  Search,
  ShoppingBag,
  LayoutGrid,
  Shirt,
  Sparkles,
  Footprints,
  ShoppingCart,
  Glasses,
  Circle,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Home", "Shop", "Courses", "Gallery", "Contacts"];

  const categories = [
    { name: "All Items", icon: LayoutGrid },
    { name: "T-Shirts", icon: Shirt },
    { name: "Pants", icon: ShoppingCart },
    { name: "Jackets", icon: ShoppingBag },
    { name: "Tops", icon: Sparkles },
    { name: "Scarves", icon: Sparkles },
    { name: "Heels", icon: Footprints },
    { name: "Bags", icon: ShoppingBag },
    { name: "Sunglasses", icon: Glasses },
    { name: "Cap", icon: Circle },
  ];

  return (
    <div className="w-full border-b bg-white">
      {/* TOP NAV */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wider">ARCHE</h1>

        {/* NAV LINKS (Desktop) */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          {navLinks.map((item, i) => (
            <a key={i} href="#" className="hover:text-black transition">
              {item}
            </a>
          ))}
        </div>

        {/* ICONS + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <Search size={18} />
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <ShoppingBag size={18} />
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-full border hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-600 font-medium border-t">
          {navLinks.map((item, i) => (
            <a key={i} href="#" className="hover:text-black transition">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* CATEGORY PILLS */}
      <div className="flex gap-3 overflow-x-auto px-6 pb-4">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm whitespace-nowrap transition
                ${
                  i === 0
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon size={16} />
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

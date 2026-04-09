import { FaPinterest, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo / Brand */}
        <h2 className="text-xl font-bold text-white tracking-wide mb-4 md:mb-0">
          PackTrack
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="https://in.pinterest.com/urbanedgedropship/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-red-500 transition">
            <FaPinterest />
          </a>
          <a href="https://www.instagram.com/glamorbazaar/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-400 transition">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" 
             className="hover:text-green-500 transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PackTrack. All rights reserved.
      </div>
    </footer>
  );
}

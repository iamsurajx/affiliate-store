import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// pages
import CoupleCollection from "./pages/CoupleCollection";
import PartyReady from "./pages/PartyReady";
import MensCollections from "./pages/MensCollections";
import SummerSale from "./pages/SummerSale";
import WinterSale from "./pages/WinterSale";
import WomenCollections from "./pages/WomenCollections";

// categories pages
import Pants from "./categories_pages/Pants";
import Shoes from "./categories_pages/Shoes";
import FlipkartOffers from "./categories_pages/FlipkartOffers";
import MyntraOffers from "./categories_pages/MyntraOffers";
import MeshooOffers from "./categories_pages/MeshooOffers";
import Under1000 from "./categories_pages/Under1000";
import Under200 from "./categories_pages/Under200";
import Under2000 from "./categories_pages/Under2000";
import Under500 from "./categories_pages/Under500";
import Sunglasses from "./categories_pages/Sunglasses";
import Shirts from "./categories_pages/Shirts";
import Watches from "./categories_pages/Watches";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Main Pages */}
        <Route path="/couple-collection" element={<CoupleCollection />} />
        <Route path="/party-ready" element={<PartyReady />} />
        <Route path="/mens-collections" element={<MensCollections />} />
        <Route path="/women-collections" element={<WomenCollections />} />
        <Route path="/summer-sale" element={<SummerSale />} />
        <Route path="/winter-sale" element={<WinterSale />} />

        {/* Category Pages */}
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/flipkart-offers" element={<FlipkartOffers />} />
        <Route path="/myntra-offers" element={<MyntraOffers />} />
        <Route path="/meshoo-offers" element={<MeshooOffers />} />
        <Route path="/under-200" element={<Under200 />} />
        <Route path="/under-500" element={<Under500 />} />
        <Route path="/under-1000" element={<Under1000 />} />
        <Route path="/under-2000" element={<Under2000 />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

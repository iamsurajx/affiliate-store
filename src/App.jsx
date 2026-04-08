import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <ProductGrid />
      <Footer />
    </div>
  );
}

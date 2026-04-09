import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuDBoTGRGPJMfbSgCiK6fLJt92se-U07h0UqIxDiJQxp0eSA2NvZAVZA9fyqN0mQ1fIVwnhUFbGba2H20TtrBRN6LwvgQ6odXWntlWVjMbaumC820mQfZpnA",
    name: "Aloe Vera",
    description: "Natural skincare product with soothing properties.",
    price: "€25.00",
    discount: 10,
    link: "https://affiliate-link.com/aloe-vera"
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=1160",
    name: "Organic Backpack",
    description: "Eco-friendly backpack made from recycled materials.",
    price: "€140.00",
    discount: 15,
    link: "https://affiliate-link.com/backpack"
  },
  {
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1160",
    name: "Stylish Sunglasses",
    description: "UV-protected premium sunglasses for summer.",
    price: "€80.00",
    discount: 20,
    link: "https://affiliate-link.com/sunglasses"
  },
];

export default function ProductGrid() {
  return (
    <section className="px-4 py-8 bg-gray-50">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

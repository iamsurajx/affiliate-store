import React from 'react'
import ProductCard from "../components/ProductCard";


// Example JSON data with more products
const products = [
  {
    "id": "1",
    "image": "https://ugc.production.linktr.ee/ce0fcaf4-4060-4c21-bb42-75f20f656161_image.png?io=true&size=square-fit",
    "name": " White Pant",
    "description": "White solid relaxed-fit mid-rise regular trousers | 100% Linen product",
    "price": "₹499",
    "discount": "80",
    "link": "https://myntr.it/49zoGlw",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "2",
    "image": "https://ugc.production.linktr.ee/ec1dc4c2-2cad-4682-9d03-ca3b531318dd_image.png?io=true&size=square-fit",
    "name": "Coffee brown Pant",
    "description": "Coffee brown solid relaxed-fit mid-rise trousers | Material & Care Lenin & Polyester Machine wash | Roadster The Lifestyle Co Men Relaxed Fit Trousers",
    "price": "₹499",
    "discount": null,
    "link": "https://myntr.it/dVlxF15",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "3",
    "image": "https://ugc.production.linktr.ee/ebcb3c2e-838e-4366-94eb-50f061cdd78a_image.png?io=true&size=square-fit",
    "name": "Cream-coloured Pant",
    "description": "Cream-coloured solid relaxed-fit mid-rise regular trousers | Roadster The Lifestyle Co Linen Relaxed-Fit Regular Trousers",
    "price": "₹499",
    "discount": null,
    "link": "https://myntr.it/SjF83Z6",
    "category": null,
    "rating": null,
    "inStock": null
  }
]


function Pants() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Welcome to PackTrack</h2>

      {/* Cards auto-render from JSON */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            discount={item.discount}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Pants
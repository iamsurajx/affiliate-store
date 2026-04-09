import React from 'react'
import ProductCard from "../components/ProductCard";


// Example JSON data with more products
const products = 
[
  {
    "id": "1",
    "image": "https://ugc.production.linktr.ee/0f1b9233-3704-4136-b746-0b018b456b0f_image.png?io=true&size=square-fit",
    "name": "White PU Lightweight Sneakers",
    "description": "Roadster Men White PU Lightweight Sneakers",
    "price": "₹999",
    "discount": "65",
    "link": "https://myntr.it/D0LHidq",
    "category": "Shooes",
    "rating": "4.4",
    "inStock": "TRUE"
  },
  {
    "id": "2",
    "image": "https://ugc.production.linktr.ee/1ee37e62-5229-40cc-937c-1fd5f41ef5f7_image.png?io=true&size=square-fit",
    "name": "Brown Chelsea Boots",
    "description": "TEAKWOOD LEATHERS Men Slip-on Ankle-Length Chelsea Boots",
    "price": "₹1999",
    "discount": null,
    "link": "https://ajiio.in/Xj9EQda",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "3",
    "image": "https://ugc.production.linktr.ee/79994946-bd93-457a-a44b-263ce163798b_image.png?io=true&size=square-fit",
    "name": "Black Chelsea Boots",
    "description": "aadi Men Platform Round Toe Mid-Top Chelsea Boots",
    "price": "₹549",
    "discount": null,
    "link": "https://myntr.it/QlNZ0hc",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "4",
    "image": "https://ugc.production.linktr.ee/dfb88378-354a-4a64-8c54-3a307ac16c86_image.png?io=true&size=square-fit",
    "name": "Black Sneakers",
    "description": "Black Synthetic Leather | HRX by Hrithik Roshan",
    "price": "₹999",
    "discount": null,
    "link": "https://myntr.it/GV0A4xj",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "5",
    "image": "https://ugc.production.linktr.ee/208ed876-e58b-477c-8e35-fe5bf0bc2387_image.png?io=true&size=square-fit",
    "name": "White Sneakers",
    "description": "WHITE | HRX by Hrithik Roshan -118 Sneakers For Men (White , 7)",
    "price": "₹899",
    "discount": null,
    "link": "https://fktr.in/3y3KlXR",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "6",
    "image": "https://ugc.production.linktr.ee/fda43b68-efdf-49d0-90fe-3cda8e409f7a_image.png?io=true&size=square-fit",
    "name": "WHITE GREY",
    "description": "WHITE GREY | Sparx SM 734 | Stylish, Comfortable | Sneakers For Men",
    "price": "₹599",
    "discount": null,
    "link": "https://fktr.in/TZGxhyJ",
    "category": null,
    "rating": null,
    "inStock": null
  }
]




function Shoes() {
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

export default Shoes
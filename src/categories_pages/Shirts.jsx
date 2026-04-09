import React from 'react'
import ProductCard from "../components/ProductCard";


// Example JSON data with more products
const products = 
[
  {
    "id": "1",
    "image": "https://ugc.production.linktr.ee/27169e63-e23e-4a5b-8afa-7faaff84abf8_image.png?io=true&size=square-fit",
    "name": "Lavender Shirt",
    "description": "Lavender solid opaque casual shirt ,has a spread collar | Roadster The Life Co. Regular Fit Cotton Linen Casual Shirt",
    "price": "₹499.00",
    "discount": "65",
    "link": "https://myntr.it/ZeqxjeN",
    "category": "Clothing",
    "rating": "4.4",
    "inStock": "TRUE"
  },
  {
    "id": "2",
    "image": "https://ugc.production.linktr.ee/1741a2f0-4275-432f-a867-88cb36f1918c_image.png?io=true&size=square-fit",
    "name": "Beige Shirt",
    "description": "Beige solid opaque Casual shirt | 100% Cotton | Roadster The Life Co. Pure Cotton Casual Shirt",
    "price": "₹499.00",
    "discount": 75,
    "link": "https://myntr.it/oN1wnoA",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "3",
    "image": "https://ugc.production.linktr.ee/bb023a2a-310c-449c-af05-57b93e5d80c0_image.png?io=true&size=square-fit",
    "name": "COFFEE BROWN SHIRT",
    "description": "COFFEE BROWN SHIRT",
    "price": "₹299.00",
    "discount": null,
    "link": "https://fktr.in/mM1duIK",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "4",
    "image": "https://ugc.production.linktr.ee/c7118117-d8c0-4881-8ce8-16ea9b87cea1_image.png?io=true&size=square-fit",
    "name": " Green Shirt",
    "description": "Men Green Slim Fit Cotton Casual Shirt",
    "price": "₹499.00",
    "discount": null,
    "link": "https://myntr.it/u0lFJRn",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "5",
    "image": "https://ugc.production.linktr.ee/f5a0bc21-292a-4b77-b6bd-7a05de3912ed_image.png?io=true&size=square-fit",
    "name": "Men Peach-Coloured Slim Fit Opaque Cotton Casual Shirt",
    "description": null,
    "price": "₹499.00",
    "discount": null,
    "link": "https://myntr.it/88Sbma5",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "6",
    "image": "https://ugc.production.linktr.ee/bf7fe0de-30b2-41dc-b2ea-6e86c84faaca_image.png?io=true&size=square-fit",
    "name": "Light Blue",
    "description": "Light Blue solid Casual shirt | 100% Cotton | Roadster The Lifestyle Co Men Light Blue Solid Regular Fit Chambray Casual Shirt",
    "price": "₹399.00",
    "discount": null,
    "link": "https://myntr.it/EHHwgY1",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "7",
    "image": "https://ugc.production.linktr.ee/3e9eaafa-45b9-48fc-ba95-9772a0929768_image.png?io=true&size=square-fit",
    "name": "Pink Shirt",
    "description": "Pink Shirt by The Indian Garage Co. | 100% Cotton | Men Regular Fit Solid Spread Collar Casual Shirt",
    "price": "₹499.00",
    "discount": null,
    "link": "https://fktr.in/akCt96o",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "8",
    "image": "https://ugc.production.linktr.ee/67533da0-cca1-4943-b7c6-2577013f654e_image.png?io=true&size=square-fit",
    "name": "Corel pink",
    "description": "Corel pink Men Regular Fit Solid Spread Collar Casual Shirt",
    "price": "₹250.00",
    "discount": null,
    "link": "https://fktr.in/c5HbBSF",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "9",
    "image": "https://ugc.production.linktr.ee/4185ec30-36a7-44f3-9a2a-db1b5df0d9bd_image.png?io=true&size=square-fit",
    "name": "Leaf Green ",
    "description": "Leaf Green Men Regular Fit Solid Spread Collar Casual Shirt",
    "price": "₹249.00",
    "discount": null,
    "link": "https://fktr.in/j1em5S3",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "10",
    "image": "https://ugc.production.linktr.ee/ae530b01-da17-4a20-ba39-22069b2b5ac2_image.png?io=true&size=square-fit",
    "name": "Dark light blue Shirt",
    "description": "Dark light blue | Striped Spread Collar Casual Shirt",
    "price": "₹249.00",
    "discount": null,
    "link": "https://fktr.in/xzI5xVp",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "11",
    "image": "https://ugc.production.linktr.ee/be333503-a1b6-4054-b419-dc489a28fa5c_image.png?io=true&size=square-fit",
    "name": "CREAM Shirt",
    "description": "CREAM Striped Spread Collar Casual Shirt",
    "price": "₹249.00",
    "discount": null,
    "link": "https://fktr.in/L5VqNe0",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "12",
    "image": "https://ugc.production.linktr.ee/42735614-894f-48b6-b1ee-daca2c9387d0_image.png?io=true&size=square-fit",
    "name": "PEACH ",
    "description": "PEACH | STONEBERG Men Slim Fit Solid Spread Collar Formal Shirt",
    "price": "₹299.00",
    "discount": null,
    "link": "https://fktr.in/Nt4Xn2V",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "13",
    "image": "https://ugc.production.linktr.ee/bd49d052-5275-4fa6-9173-6c941ea05424_image.png?io=true&size=square-fit",
    "name": "Grey, White Striped",
    "description": "Grey, White Striped Spread Collar Casual Shirt",
    "price": "₹249.00",
    "discount": null,
    "link": "https://fktr.in/MyOrvvW",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "14",
    "image": "https://ugc.production.linktr.ee/be440733-c492-4cde-9d81-5e3f917548cd_image.png?io=true&size=square-fit",
    "name": "Teal Shirt",
    "description": "Teal | FUBAR Men Slim Fit Solid Mandarin Collar Casual Shirt",
    "price": "₹249.00",
    "discount": null,
    "link": "https://fktr.in/bUzjdkF",
    "category": null,
    "rating": null,
    "inStock": null
  },
  {
    "id": "15",
    "image": "https://ugc.production.linktr.ee/e33d69d4-2159-4ec2-a9b6-656ad1ca15f6_image.png?io=true&size=square-fit",
    "name": "Maroon solid checked opaque Casual shirt",
    "description": "Maroon solid checked opaque Casual shirt | Corduroy Casual Shirt",
    "price": "₹599.00",
    "discount": null,
    "link": "https://myntr.it/M89CVSx",
    "category": null,
    "rating": null,
    "inStock": null
  }


];

function Shirts() {
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

export default Shirts
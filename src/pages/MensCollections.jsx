import React from 'react';
import JewelryPromo from '../components/JewelryPromo';

const promoData = {
  hero: {
    logo: "Myntra Exclusive",
    since: "Trendy Collection",
    description: "Blue and Beige with white sneaker - Perfect casual look for men",
    imageUrl: "https://i.pinimg.com/736x/84/45/40/84454020b4c5a1c18939d4627ea97ad0.jpg"
  },
  products: [
    {
      id: 1,
      name: "White Trousers",
      price: "499",
      link: "https://myntr.it/49zoGlw",   // ← yaha apna real link daal do
      imageUrl: "https://ugc.production.linktr.ee/ce0fcaf4-4060-4c21-bb42-75f20f656161_image.png?io=true&size=square-fit"
    },
    {
      id: 2,
      name: "Beige Shirt",
      price: "399",
      link: "https://myntr.it/oN1wnoA",
      imageUrl: "https://ugc.production.linktr.ee/1741a2f0-4275-432f-a867-88cb36f1918c_image.png?io=true&size=square-fit"
    },
    {
      id: 3,
      name: "White Sneaker",
      price: "899",
      link: "https://myntr.it/M6xdo46",
      imageUrl: "https://ugc.production.linktr.ee/ee9734e2-2828-4a81-b25a-51286d6e06a7_image.png?io=true&size=square-fit"
    },
    {
      id: 4,
      name: "Stylish Watch",
      price: "999",
      link: "https://myntr.it/A2HUfaI",
      imageUrl: "https://ugc.production.linktr.ee/2a85c6c1-244f-4060-a43e-33311af2c6da_image.png?io=true&size=square-fit"
    }
  ]
};

function MensCollections() {
  return (
    <>
      <JewelryPromo data={promoData} />
      <br />
      <br />
      <JewelryPromo data={promoData} />
    </>
  );
}

export default MensCollections;
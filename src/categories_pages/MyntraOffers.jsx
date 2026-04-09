import MyntraOfferCard from "../components/MyntraOfferCard";

const myntraOffers = [
  {
    id: 1,
    image: "https://asset22.ckassets.com/resources/image/staticpage_images/Deal2%2049-1761628175.png",
    title: "Personal Care Under ₹1200",
    subtitle: "Starting from ₹29",
    priceInfo: "₹29 - ₹1200",
    profitInfo: "Per sale you earn upto 8% profit",
    link: "https://myntr.it/ngaamkY",
  },
  {
    id: 2,
    image: "https://asset22.ckassets.com/resources/image/staticpage_images/image%20(2)-1764236759.png",
    title: "Fashion Sale",
    subtitle: "Flat 50% Off",
    priceInfo: "₹499 - ₹2999",
    profitInfo: "Earn upto 10% profit",
    link: "https://myntr.it/t6Oog5F",
  },
];

export default function MyntraOffer() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold mb-6">Myntra Offers</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {myntraOffers.map((offer) => (
          <MyntraOfferCard
            key={offer.id}
            image={offer.image}
            title={offer.title}
            subtitle={offer.subtitle}
            priceInfo={offer.priceInfo}
            profitInfo={offer.profitInfo}
            link={offer.link}
          />
        ))}
      </div>
    </div>
  );
}
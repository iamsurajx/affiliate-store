export default function MyntraOfferCard({ image, title, subtitle, priceInfo, profitInfo, link }) {
  // Copy link function
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="w-full max-w-sm bg-white">
      {/* Image */}
      <div className="w-full h-56 bg-gray-50 flex items-center justify-center">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>

      {/* Info Section */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
        <p className="mt-2 text-base font-bold text-indigo-600">{priceInfo}</p>
        <p className="mt-1 text-xs text-green-600 font-medium">{profitInfo}</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-between px-4 pb-4">
        <button
          onClick={handleCopy}
          className="flex-1 mr-2 bg-indigo-900 text-white text-sm font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Copy Link
        </button>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 ml-2 bg-pink-600 text-white text-sm font-semibold py-2 rounded-md text-center hover:bg-pink-500 transition"
        >
          Open Myntra
        </a>
      </div>
    </div>
  );
}

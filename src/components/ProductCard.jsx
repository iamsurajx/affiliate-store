export default function ProductCard({ image, name, description, price, discount, link, rating }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl shadow-lg hover:shadow-xl transition bg-white overflow-hidden"
    >
      {/* Image + Discount */}
      <div className="relative w-full h-56 bg-gray-50">
        <img src={image} alt={name} className="w-full h-full object-contain p-4" />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-rose-600 px-3 py-1 text-xs font-semibold text-white rounded-md shadow">
            Save {discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 text-center">
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <p className="mt-2 text-lg font-bold text-blue-600">{price}</p>

        {/* ⭐ Rating */}
        {rating && (
          <p className="mt-2 text-sm text-yellow-500 font-medium">
            ⭐ {rating} / 5
          </p>
        )}

        {/* CTA */}
        <button className="mt-4 w-full rounded-md border border-indigo-900 bg-indigo-900 px-4 py-2 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900">
          Buy Now
        </button>
      </div>
    </a>
  );
}

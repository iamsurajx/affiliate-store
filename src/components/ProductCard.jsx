export default function ProductCard({ image, name, description, price, discount, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-lg border border-gray-200 shadow hover:shadow-md transition"
    >
      {/* Discount Badge */}
      {discount && (
        <span className="absolute -top-px -right-px rounded-se-lg rounded-es-lg bg-rose-600 px-3 py-1 text-xs font-medium tracking-widest text-white uppercase">
          Save {discount}%
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

      {/* Product Info */}
      <div className="p-3 text-center">
        <strong className="text-sm font-semibold text-gray-900">{name}</strong>

        <p className="mt-1 text-xs text-gray-600">{description}</p>

        <p className="mt-2 text-sm font-bold text-blue-600">{price}</p>

        {/* CTA Button */}
        <span className="mt-3 inline-block rounded-md border border-indigo-900 bg-indigo-900 px-3 py-2 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900">
          Buy now
        </span>
      </div>
    </a>
  );
}

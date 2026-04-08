export default function ProductCard({ image, name, description, price, discount, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-se-3xl border border-gray-100 shadow hover:shadow-lg transition"
    >
      {/* Discount Badge */}
      {discount && (
        <span className="absolute -top-px -right-px rounded-se-3xl rounded-es-3xl bg-rose-600 px-6 py-2 font-medium tracking-widest text-white uppercase text-sm">
          Save {discount}%
        </span>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="h-80 w-full rounded-se-3xl object-cover"
      />

      {/* Product Info */}
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">{name}</strong>

        <p className="mt-2 text-gray-700 text-sm">{description}</p>

        <p className="mt-2 text-lg font-semibold text-blue-600">{price}</p>

        {/* CTA Button */}
        <span className="mt-4 inline-block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900">
          Buy now
        </span>
      </div>
    </a>
  );
}

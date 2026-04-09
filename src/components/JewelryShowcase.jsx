export default function JewelryShowcase() {
  const products = [
    {
      name: "Spark",
      desc: "18K yellow",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRi-5SGGl6ffiRk5swYiK8sFAGjLhv4yhKpCq3Nwc1calMy2DyUSp-l-EgVTqXGMqafIBJBzJ5NMw-4tLiVo9e-cRE2JYRQojus8O877IXom0M4Qn568Ara",
    },
    {
      name: "Luna",
      desc: "18K rose",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsLkUgKuApbKi6k5K1jAygywLJJPurDfDQIcmV-ksy_8fXBTQjxCCwNetjs-vlijyE7BN_YR-WqDV2As1L-CJ-4ERrl3QM1hIIHSKi9yo",
    },
    {
      name: "Maya",
      desc: "18K rose",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxKEsibkGN_oBXHE_8NMUJSxmQs80UU_HLeOHqhB9mPaB6LxCQUoBiyrBPQK0iTVWinua1lDkIZVewdwtNSUTGOfOXMALABlHwuYMq",
    },
    {
      name: "Love knot",
      desc: "18K yellow",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYbakvMQYCiikmiI31RGbOU0UUhS3H2Doopo8b9e2YeZRbQqdmQ9kB1d6aeDGFHmLL_mButcgZtX-AwqpKfW1wKq980rqy",
    },
  ];

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">

        {/* LEFT */}
        <div className="rounded-2xl overflow-hidden h-full">
          <img
            src="https://i.pinimg.com/736x/a1/00/91/a100918f1152e3d5df8196070057d434.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-4 h-full overflow-y-auto pr-2">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl flex flex-col justify-between h-full"
            >
              <div>
                <h2>{item.name}</h2>
                <p className="text-sm text-gray-500">{item.desc}</p>

                <div className="aspect-[4/3] overflow-hidden rounded-lg mt-2">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <button className="bg-black text-white py-2 rounded-lg mt-3">
                Buy Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
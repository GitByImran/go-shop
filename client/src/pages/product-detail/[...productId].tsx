import React from "react";
import { CheckCircle, Crown, XCircle } from "lucide-react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

const ProductId = () => {
  const router = useRouter();
  const productId = router.asPath.split("/")[2];
  const getProductById = products.find(
    (item) => item.id === parseInt(productId)
  );

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-medium overflow-hidden border">
          <img
            src={getProductById?.image}
            alt={getProductById?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="border rounded-medium px-3 py-1 shadow w-fit flex items-center gap-2 font-semibold text-gray-700">
            <Crown size={16} />
            {getProductById?.brand}
          </p>
          <h2 className="font-bold text-lg my-3">{getProductById?.name}</h2>
          <div className="flex flex-col gap-1 my-5">
            <p className="text-gray-700 font-semibold">
              Model: <span className="text-black">{getProductById?.model}</span>
            </p>
            <span className="text-gray-700 font-semibold">
              Item : <span className="text-black">#{getProductById?.id}</span>
            </span>
            <p className="flex items-center gap-1 font-semibold text-gray-700">
              Available :{" "}
              {getProductById?.inStock ? (
                <span className="flex items-center gap-1 text-black">
                  In Stock{" "}
                  <CheckCircle size={16} className="text-emerald-700" />
                </span>
              ) : (
                <span className="flex items-center gap-1 text-black">
                  Out of Stock <XCircle size={16} className="text-red-700" />
                </span>
              )}
            </p>
            <p className="text-gray-700 font-semibold">
              Imported from :{" "}
              <span className="capitalize text-black">
                {getProductById?.imported}
              </span>
            </p>
          </div>
          <div className="flex gap-2 border shadow w-fit px-5 py-2 rounded-medium text-gray-700">
            <h2 className="font-semibold">Quantity : </h2>
            <div className="flex items-center text-gray-700">
              <select
                name="quantity"
                id="quantity"
                defaultValue={0}
                className="w-40 outline-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3 my-5">
            <button className="rounded-medium px-5 py-2 text-md custom-primary-color">
              Add to cart
            </button>
            <button className="rounded-medium px-5 py-2 text-md custom-secondary-color">
              Buy now
            </button>
          </div>

          <div>
            <p>Note : {getProductById?.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;

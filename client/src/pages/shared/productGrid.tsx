import {
  CheckCircle,
  ChevronLeftSquare,
  Dot,
  PlusCircle,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductGrid = ({ products, category, toShow }: any) => {
  console.log(products, "&", category);
  const filterProduct = products.filter(
    (product: any) => product.category === category
  );
  //   console.log(filterProduct);
  return (
    <div className="m-10">
      <div className="flex items-center gap-5 border mb-10 px-5 rounded-medium shadow">
        <button>
          <ChevronLeftSquare />
        </button>
        <h2 className="my-5 border w-fit px-5 py-2 rounded-medium">
          Showing Product for
          <span className="capitalize font-semibold mx-1">{category}</span>
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-10">
        {filterProduct.slice(0, toShow).map((item: any, index: any) => (
          <Link
            href={`/product-detail/${item.id}`}
            key={index}
            className="col-span-3 border p-5 rounded-medium"
          >
            <div className="flex flex-col gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-xl bg-gray-50 overflow-hidden"
              />

              <h2 className="text-md truncate">{item.name}</h2>

              <div className="flex justify-between items-center">
                <p className="text-lg text-emerald-500 font-semibold">
                  ${item.price}
                </p>
                <p className="text-sm">
                  {item.inStock ? (
                    <span className="text-emerald-500 flex items-center">
                      <Dot /> In Stock
                    </span>
                  ) : (
                    <span className="text-red-500 flex items-center">
                      <Dot /> Out of Stock
                    </span>
                  )}
                </p>
              </div>

              {/* <div className="w-fit relative">
              <button className="hover:text-red-500">
                <ShoppingCart />
              </button>
              <button className="absolute -top-3 -right-4">
                <PlusCircle size={16} strokeWidth={2} />
                <CheckCircle size={16} strokeWidth={2} /> 
              </button>
            </div>*/}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

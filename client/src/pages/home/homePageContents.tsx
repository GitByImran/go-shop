import { products } from "@/lib/products";
import ProductGrid from "@/pages/shared/productGrid";
import React from "react";

const HomePageContent = () => {
  console.log(products);
  return (
    <div>
      <h2>
        <ProductGrid products={products} category={"watch"} toShow={5} />
      </h2>
    </div>
  );
};

export default HomePageContent;

import Image from "next/image";
import { Button } from "../../components/ui/button";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-lg transition">
      
      {/* Image */}
      <div className="relative w-full h-48 mb-4 bg-gray-100 rounded-lg">
        <Image
          src={product.thumbnail || "/placeholder.png"}
          alt={product.title}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Title & Category */}
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-500 capitalize">{product.category}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {product.description}
      </p>

      {/* Price & Discount */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>
        <span className="text-sm text-red-500">
          -{product.discountPercentage}%
        </span>
      </div>

      {/* Rating & Stock */}
      <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>⭐ {product.rating}</span>
        <span>{product.stock} in stock</span>
      </div>

      {/* Brand & Warranty */}
      <div className="mt-2 text-xs text-gray-500">
        <p>Brand: {product.brand}</p>
        <p>Warranty: {product.warrantyInformation}</p>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-4 w-full"
      >
        Add to Cart
      </Button>
    </div>
  );
}

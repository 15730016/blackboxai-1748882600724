import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // In a real application, we would fetch product data using this id
  console.log('Fetching product details for id:', id);

  // Mock product data (will be replaced with API data)
  const product = {
    name: "Dầu Tẩy Trang Kose Softymo Làm Sạch Nhanh 230ml",
    price: 104000,
    originalPrice: 179000,
    discount: 42,
    imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/c994cf4f8c590e7cf1492f04d9ae7db9.png",
    description: "Sản phẩm dầu tẩy trang cao cấp từ Kose Softymo, giúp làm sạch sâu và dưỡng ẩm cho da."
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Will implement cart functionality later
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg p-4">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold text-red-500">
                {product.price.toLocaleString()}đ
              </span>
              <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                -{product.discount}%
              </span>
            </div>
            <div className="text-gray-500 line-through">
              {product.originalPrice.toLocaleString()}đ
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Số lượng:</label>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 border rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="w-20 px-3 py-1 border rounded-md text-center"
                min="1"
              />
              <button 
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#00a65f] text-white py-3 rounded-md hover:bg-[#008f52] transition-colors"
          >
            Thêm vào giỏ hàng
          </button>

          {/* Product Description */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Mô tả sản phẩm</h2>
            <p className="text-gray-600">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

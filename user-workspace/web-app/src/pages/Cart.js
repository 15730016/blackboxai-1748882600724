import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dầu Tẩy Trang Kose Softymo Làm Sạch Nhanh 230ml",
      price: 104000,
      originalPrice: 179000,
      quantity: 1,
      imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/c994cf4f8c590e7cf1492f04d9ae7db9.png"
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold mb-6">Giỏ hàng của bạn</h1>
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">Giỏ hàng của bạn đang trống</p>
          <Link 
            to="/"
            className="inline-block bg-[#00a65f] text-white px-6 py-2 rounded-md hover:bg-[#008f52] transition-colors"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Giỏ hàng của bạn</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          {cartItems.map(item => (
            <div 
              key={item.id}
              className="flex items-center border-b py-4 space-x-4"
            >
              <img 
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-grow">
                <h3 className="font-medium mb-2">{item.name}</h3>
                <div className="flex items-center space-x-4">
                  <div className="text-red-500 font-semibold">
                    {item.price.toLocaleString()}đ
                  </div>
                  <div className="text-gray-500 line-through text-sm">
                    {item.originalPrice.toLocaleString()}đ
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border rounded-md text-center"
                      min="1"
                    />
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Tổng đơn hàng</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{calculateTotal().toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>0đ</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Tổng cộng:</span>
                <span className="text-red-500">
                  {calculateTotal().toLocaleString()}đ
                </span>
              </div>
            </div>
            <button className="w-full bg-[#00a65f] text-white py-3 rounded-md mt-6 hover:bg-[#008f52] transition-colors">
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

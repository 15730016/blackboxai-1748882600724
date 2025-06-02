import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: '1', name: 'Bỉm Tã & Vệ Sinh' },
  { id: '2', name: 'Mỹ Phẩm' },
  { id: '3', name: 'Sữa Cho Bé' },
  { id: '4', name: 'Làm Đẹp & Trang Điểm' },
  { id: '5', name: 'Ăn Dặm & Dinh Dưỡng' },
  { id: '6', name: 'Chăm Sóc Cho Bé' },
  { id: '7', name: 'Chăm Sóc Gia Đình' },
  { id: '8', name: 'Phụ Kiện' }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      {/* Top Bar */}
      <div className="bg-[#00a65f] text-white py-1">
        <div className="container mx-auto flex justify-end items-center space-x-4 text-sm">
          <a href="tel:0985582439" className="flex items-center">
            <i className="fas fa-phone mr-2"></i>
            098 558 2439
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/static/images/top/logo_nobinobi.svg" 
              alt="Nobinobi" 
              className="h-8"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a65f]"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#00a65f]">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-6">
            <Link to="/notifications" className="relative">
              <i className="fas fa-bell text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>

            <Link to="/login" className="flex items-center space-x-2">
              <i className="fas fa-user text-xl"></i>
              <span className="hidden md:inline">Tài khoản</span>
            </Link>

            <Link to="/cart" className="relative">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="border-t border-gray-200 bg-white">
        <div className="container mx-auto">
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <i className="fas fa-th-large"></i>
              <span>Danh Mục</span>
              <i className={`fas fa-chevron-down transform transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {/* Category Dropdown */}
            {isCategoryOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 shadow-lg rounded-b-lg">
                {categories.map(category => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl">
            <div className="p-4">
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              <div className="mt-8 space-y-4">
                <Link to="/login" className="block py-2">
                  <i className="fas fa-user mr-2"></i>
                  Tài khoản
                </Link>
                <Link to="/notifications" className="block py-2">
                  <i className="fas fa-bell mr-2"></i>
                  Thông báo
                </Link>
                <Link to="/cart" className="block py-2">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Giỏ hàng
                </Link>
                <div className="border-t border-gray-200 pt-4">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="block py-2"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

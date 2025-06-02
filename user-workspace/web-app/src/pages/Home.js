import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const banners = [
  {
    id: 1,
    imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/413b05a11dd52b84d7ca64d31512af42.jpeg",
    link: "/brand/77d8ed29-abd5-4e1d-83f5c7e18abb/smartangel"
  },
  {
    id: 2,
    imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/00b052152db2963813a308aa45298203.jpeg",
    link: "/collections/64ece1f3-ce6e-4a9e-9bc9-02681b764f82"
  },
  {
    id: 3,
    imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/bc1287652204c7c4d1926d227aad6fec.jpeg",
    link: "/collections/47cdbe21-7bdb-4cac-bdd0-260bd47aee87"
  }
];

const features = [
  {
    id: 1,
    icon: 'hot_deal',
    title: "Siêu deal mỗi ngày",
    link: "/"
  },
  {
    id: 2,
    icon: 'attractive_offers',
    title: "Ưu đãi hấp dẫn",
    link: "/"
  },
  {
    id: 3,
    icon: 'ship_24h',
    title: "Giao nhanh 2H",
    link: "/"
  },
  {
    id: 4,
    icon: 'free_ship',
    title: "Miễn phí giao hàng",
    link: "/"
  },
  {
    id: 5,
    icon: 'return',
    title: "Đổi trả 15 ngày",
    link: "/"
  }
];

const products = [
  {
    id: 1,
    name: "Dầu Tẩy Trang Kose Softymo Làm Sạch Nhanh 230ml",
    price: 104000,
    originalPrice: 179000,
    discount: 42,
    imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/c994cf4f8c590e7cf1492f04d9ae7db9.png"
  },
  {
    id: 2,
    name: "Nước Tẩy Trang Kose Softymo Làm Sạch Nhanh Cho Da 230ml",
    price: 102000,
    originalPrice: 179000,
    discount: 44,
    imageUrl: "https://images.nobinobi.com.vn/clf-cdn/prod/1d7d59118bb1916b386cc60543246a7c.png"
  }
];

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    dotsClass: 'slick-dots absolute bottom-4 !flex justify-center space-x-2',
    customPaging: () => (
      <div className="w-2 h-2 bg-white/50 rounded-full hover:bg-white/80 transition-colors"></div>
    )
  };

  return (
    <div className="min-h-screen">
      {/* Banner Carousel */}
      <div className="banner-carousel relative">
        <Slider {...{
          ...sliderSettings,
          nextArrow: <div className="slick-arrow slick-next !w-10 !h-10 !bg-white/50 hover:!bg-white rounded-full flex items-center justify-center before:content-['→'] before:text-2xl before:text-gray-600"></div>,
          prevArrow: <div className="slick-arrow slick-prev !w-10 !h-10 !bg-white/50 hover:!bg-white rounded-full flex items-center justify-center before:content-['←'] before:text-2xl before:text-gray-600"></div>,
        }}>
          {banners.map(banner => (
            <div key={banner.id} className="relative">
              <Link to={banner.link}>
                <img 
                  src={banner.imageUrl} 
                  alt="Banner" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map(feature => (
            <Link 
              key={feature.id}
              to={feature.link}
              className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                {feature.icon === 'hot_deal' && (
                  <i className="fas fa-fire text-2xl text-red-500"></i>
                )}
                {feature.icon === 'attractive_offers' && (
                  <i className="fas fa-gift text-2xl text-[#00a65f]"></i>
                )}
                {feature.icon === 'ship_24h' && (
                  <i className="fas fa-truck text-2xl text-[#00a65f]"></i>
                )}
                {feature.icon === 'free_ship' && (
                  <i className="fas fa-shipping-fast text-2xl text-[#00a65f]"></i>
                )}
                {feature.icon === 'return' && (
                  <i className="fas fa-undo text-2xl text-[#00a65f]"></i>
                )}
              </div>
              <span className="text-sm text-center font-medium">{feature.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Sản phẩm nổi bật</h2>
          <Link 
            to="/collections"
            className="text-[#00a65f] hover:underline flex items-center"
          >
            Xem tất cả
            <i className="fas fa-chevron-right ml-2"></i>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map(product => (
            <div key={product.id} className="product-card p-4">
              <Link to={`/product/${product.id}`}>
                <div className="relative pb-[100%] mb-4">
                  <img 
                    src={product.imageUrl}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm mb-2 line-clamp-2 h-10">
                  {product.name}
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="price-discount">
                      {product.price.toLocaleString()}đ
                    </span>
                    <span className="discount-badge">
                      -{product.discount}%
                    </span>
                  </div>
                  <div className="price-original">
                    {product.originalPrice.toLocaleString()}đ
                  </div>
                </div>
              </Link>
              <button className="btn-primary w-full mt-4">
                Chọn mua
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Voucher Section */}
      <div className="container mx-auto py-8 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Voucher của bạn</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#00a65f] rounded-full flex items-center justify-center">
                <i className="fas fa-ticket-alt text-2xl text-white"></i>
              </div>
              <div>
                <div className="font-semibold">VC_FREESHIP2025</div>
                <div className="text-sm text-gray-500">
                  HSD: 27 - 31/12/2025
                </div>
                <button className="btn-primary mt-2 text-sm">
                  Lấy ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

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

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-arrow slick-next !w-10 !h-10 !bg-white/50 hover:!bg-white rounded-full flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10"
  >
    <i className="fas fa-chevron-right text-gray-600"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="slick-arrow slick-prev !w-10 !h-10 !bg-white/50 hover:!bg-white rounded-full flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10"
  >
    <i className="fas fa-chevron-left text-gray-600"></i>
  </button>
);

function Home() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    arrows: true,
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
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
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
            <div key={product.id} className="product-card p-4 hover:shadow-lg">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative pb-[100%] mb-4 overflow-hidden group">
                  <img 
                    src={product.imageUrl}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm mb-2 line-clamp-2 h-10 text-gray-800 group-hover:text-[#00a65f]">
                  {product.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
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
              <button className="btn-primary w-full mt-4 flex items-center justify-center space-x-2">
                <i className="fas fa-shopping-cart"></i>
                <span>Chọn mua</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Voucher Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Voucher của bạn</h2>
            <Link to="/vouchers" className="text-[#00a65f] hover:underline flex items-center">
              Xem tất cả
              <i className="fas fa-chevron-right ml-2"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="voucher-card group">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#00a65f] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fas fa-ticket-alt text-2xl text-white"></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">Miễn phí vận chuyển</div>
                    <div className="text-sm text-gray-500 mb-2">
                      HSD: 27 - 31/12/2025
                    </div>
                    <button className="btn-primary text-sm w-full">
                      Lấy ngay
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-dashed">
                  <div className="text-sm text-gray-500">
                    Đơn tối thiểu 500K
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00a65f] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#008f52] transition-colors z-50"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default Home;

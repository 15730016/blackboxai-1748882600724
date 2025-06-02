import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-12">
        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Công ty TNHH Thương mại và Dịch vụ Farmi</h3>
            <p className="text-gray-600">
              Địa chỉ: 67 Thủ Khoa Huân, Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
            </p>
            <p className="text-gray-600">
              <a href="tel:0985582439" className="hover:text-[#00a65f]">
                Điện thoại: 098 558 2439
              </a>
            </p>
            <p className="text-gray-600">
              <a href="mailto:cskh@farmi.vn" className="hover:text-[#00a65f]">
                Email: cskh@farmi.vn
              </a>
            </p>
            <p className="text-gray-600">
              GPĐKDN: 0315027157 do Sở Kế hoạch & Đầu tư TP.HCM cấp ngày 07/05/2018
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Về nobinobi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tuyen-dung" className="text-gray-600 hover:text-[#00a65f]">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="text-gray-600 hover:text-[#00a65f]">
                  Giới thiệu nobinobi
                </Link>
              </li>
              <li>
                <Link to="/dieu-kien-giao-dich" className="text-gray-600 hover:text-[#00a65f]">
                  Điều kiện giao dịch chung
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chinh-sach-giao-hang" className="text-gray-600 hover:text-[#00a65f]">
                  Chính sách giao hàng
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-bao-mat" className="text-gray-600 hover:text-[#00a65f]">
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-thanh-toan" className="text-gray-600 hover:text-[#00a65f]">
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-doi-tra" className="text-gray-600 hover:text-[#00a65f]">
                  Chính sách đổi trả và bảo hành
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kết nối với chúng tôi</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/nobinobi.babystore/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/static/images/FooterGlobal/Facebook.svg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/nobinobi_store" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/static/images/FooterGlobal/Instagram.svg" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@genztaplammeee" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/static/images/FooterGlobal/TikTok.svg" alt="TikTok" className="w-8 h-8" />
              </a>
              <a href="https://zalo.me/3186390264418048470" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img src="/static/images/FooterGlobal/Zalo.svg" alt="Zalo" className="w-8 h-8" />
              </a>
            </div>

            <h3 className="font-semibold text-lg mb-4">Phương thức thanh toán</h3>
            <div className="flex flex-wrap gap-4">
              <img src="/static/images/FooterGlobal/Visa.svg" alt="Visa" className="h-8" />
              <img src="/static/images/FooterGlobal/Mastercard.svg" alt="Mastercard" className="h-8" />
              <img src="/static/images/FooterGlobal/Napas.svg" alt="Napas" className="h-8" />
              <img src="/static/images/FooterGlobal/Momo.svg" alt="Momo" className="h-8" />
            </div>
          </div>
        </div>

        {/* Mobile App Download */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-4">Tải app nobinobi ngay</h3>
              <div className="flex space-x-4">
                <a href="https://play.google.com/store/apps/details?id=com.nobinobi.consumer" target="_blank" rel="noopener noreferrer">
                  <img src="/static/images/FooterGlobal/GooglePlay.svg" alt="Google Play" className="h-10" />
                </a>
                <a href="https://apps.apple.com/vn/app/nobinobi-đồ-nhật-cho-bé/id6448258593" target="_blank" rel="noopener noreferrer">
                  <img src="/static/images/FooterGlobal/AppStore.svg" alt="App Store" className="h-10" />
                </a>
              </div>
            </div>
            <img src="/static/images/FooterGlobal/QR_Code.svg" alt="QR Code" className="h-24" />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>Bản quyền © 2025 nobinobi - Công ty TNHH Thương mại và Dịch vụ Farmi</p>
          <a href="http://online.gov.vn/Website/chi-tiet-130522" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
            <img src="/static/images/FooterGlobal/BoCongThuong.png" alt="Bộ Công Thương" className="h-16" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

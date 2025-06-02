import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 text-center ${isLogin ? 'text-[#00a65f] border-b-2 border-[#00a65f]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(true)}
          >
            Đăng nhập
          </button>
          <button
            className={`flex-1 py-2 text-center ${!isLogin ? 'text-[#00a65f] border-b-2 border-[#00a65f]' : 'text-gray-500'}`}
            onClick={() => setIsLogin(false)}
          >
            Đăng ký
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-gray-700 mb-2">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00a65f]"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00a65f]"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </>
          )}
          
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00a65f]"
              placeholder="Nhập email"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#00a65f]"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00a65f] text-white py-3 rounded-md hover:bg-[#008f52] transition-colors"
          >
            {isLogin ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

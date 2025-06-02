import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { id } = useParams();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Danh Mục Sản Phẩm</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Product grid will be populated with data from API */}
        <div className="text-center text-gray-500">
          Loading products for category {id}...
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;

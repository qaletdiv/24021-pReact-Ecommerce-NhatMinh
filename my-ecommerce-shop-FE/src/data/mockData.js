export const MOCK_PRODUCTS = [
  {
    id: 'p1',
    name: 'iPhone 15 Pro Max 256GB',
    description: 'Chip A17 Pro mạnh mẽ, khung viền Titan siêu bền, hệ thống camera chuyên nghiệp.',
    price: 29990000,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000',
      'https://images.unsplash.com/photo-1695048133142-13c8ed3ad44c?q=80&w=1000'
    ],
    isFeatured: true,
    category: 'Điện thoại',
    stock: 10,
    specs: "Màn hình 6.7 inch, Chip A17 Pro, RAM 8GB"
  },
  {
    id: 'p2',
    name: 'AirPods Pro Gen 2',
    description: 'Chống ồn chủ động vượt trội, âm thanh thích ứng và thời lượng pin ấn tượng.',
    price: 5990000,
    image: 'https://i.pinimg.com/736x/c9/5e/a2/c95ea2616047a11138cb6bea77a8ba02.jpg',
    images: ['https://i.pinimg.com/736x/c9/5e/a2/c95ea2616047a11138cb6bea77a8ba02.jpg'],
    isFeatured: false,
    category: 'Phụ kiện',
    stock: 50,
    specs: "Bluetooth 5.3, Chống nước IPX4, Pin 6h"
  },
  {
    id: 'p3',
    name: 'MacBook Air M2 13 inch',
    description: 'Thiết kế mỏng nhẹ sang trọng, hiệu năng cực đỉnh từ chip Apple M2.',
    price: 24990000,
    image: 'https://images.unsplash.com/photo-1661961110671-77b71b929d52?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1661961110671-77b71b929d52?q=80&w=1000'],
    isFeatured: true,
    category: 'Laptop',
    stock: 5,
    specs: "Chip M2, RAM 8GB, SSD 256GB"
  },
  {
    id: 'p4',
    name: 'iPad Pro M2 11 inch',
    description: 'Sức mạnh của máy tính trong thân hình máy tính bảng.',
    price: 21500000,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000'],
    isFeatured: true,
    category: 'Máy tính bảng',
    stock: 8,
    specs: "Màn hình Liquid Retina, Chip M2"
  },
  {
    id: 'p5',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Flagship Android đỉnh cao với bút S Pen tích hợp, camera 200MP và AI thông minh.',
    price: 31990000,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000'],
    isFeatured: true,
    category: 'Điện thoại',
    stock: 12,
    specs: "Màn hình 6.8 inch Dynamic AMOLED, Snapdragon 8 Gen 3, RAM 12GB, Camera 200MP"
  },
  {
    id: 'p6',
    name: 'Sony WH-1000XM5',
    description: 'Tai nghe chụp tai không dây chống ồn hàng đầu thế giới, âm thanh Hi-Res và pin 30 giờ.',
    price: 8490000,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000'],
    isFeatured: false,
    category: 'Phụ kiện',
    stock: 25,
    specs: "Bluetooth 5.2, Pin 30h, Chống ồn ANC, Hi-Res Audio"
  },
  {
    id: 'p7',
    name: 'Dell XPS 15 OLED',
    description: 'Laptop cao cấp với màn hình OLED 15.6 inch sắc nét, Intel Core i9 thế hệ 13 hiệu năng vượt trội.',
    price: 52990000,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=1000'],
    isFeatured: true,
    category: 'Laptop',
    stock: 4,
    specs: "Intel Core i9-13900H, RAM 32GB, SSD 1TB, RTX 4070, Màn OLED 3.5K"
  },
  {
    id: 'p8',
    name: 'Apple Watch Series 9',
    description: 'Đồng hồ thông minh với chip S9 mới, màn hình sáng hơn và tính năng Double Tap độc đáo.',
    price: 11990000,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000'],
    isFeatured: false,
    category: 'Phụ kiện',
    stock: 20,
    specs: "Màn hình Always-On Retina, GPS, Chip S9, Chống nước 50m"
  },
  {
    id: 'p9',
    name: 'Samsung Galaxy Tab S9+',
    description: 'Máy tính bảng Android premium với màn hình Dynamic AMOLED 12.4 inch và bút S Pen đi kèm.',
    price: 18990000,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1000'],
    isFeatured: true,
    category: 'Máy tính bảng',
    stock: 7,
    specs: "Snapdragon 8 Gen 2, RAM 12GB, Màn 12.4 inch AMOLED, S Pen"
  },
  {
    id: 'p10',
    name: 'Logitech MX Master 3S',
    description: 'Chuột không dây cao cấp dành cho dân chuyên nghiệp, cảm biến 8000 DPI và cuộn siêu êm.',
    price: 2490000,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000'],
    isFeatured: false,
    category: 'Phụ kiện',
    stock: 40,
    specs: "Bluetooth + USB-C, Cảm biến 8000 DPI, Pin 70 ngày, Tương thích đa nền tảng"
  },
  {
    id: 'p11',
    name: 'ASUS ROG Zephyrus G14',
    description: 'Laptop gaming mỏng nhẹ nhất phân khúc, AMD Ryzen 9 + RTX 4060, màn hình 144Hz.',
    price: 38990000,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000'],
    isFeatured: false,
    category: 'Laptop',
    stock: 6,
    specs: "AMD Ryzen 9 7940HS, RAM 16GB, SSD 512GB, RTX 4060, Màn 14 inch 144Hz"
  },
  {
    id: 'p12',
    name: 'Google Pixel 8 Pro',
    description: 'Android thuần túy với AI tiên tiến nhất, camera Tensor G3 chụp ảnh đêm xuất sắc.',
    price: 22990000,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000'],
    isFeatured: false,
    category: 'Điện thoại',
    stock: 15,
    specs: "Chip Tensor G3, RAM 12GB, Camera 50MP + 48MP + 48MP, Pin 5050mAh"
  },
  {
    id: 'p13',
    name: 'JBL Flip 6',
    description: 'Loa Bluetooth di động chống nước IP67, âm thanh JBL Pro Sound mạnh mẽ và pin 12 giờ.',
    price: 1990000,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000'],
    isFeatured: false,
    category: 'Phụ kiện',
    stock: 60,
    specs: "Bluetooth 5.1, Chống nước IP67, Pin 12h, Công suất 30W"
  },
  {
    id: 'p14',
    name: 'iPad Air M1 10.9 inch',
    description: 'Máy tính bảng cân bằng hoàn hảo giữa hiệu năng và giá cả, chip M1 mạnh mẽ.',
    price: 15990000,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1000'],
    isFeatured: false,
    category: 'Máy tính bảng',
    stock: 10,
    specs: "Chip M1, RAM 8GB, Màn 10.9 inch Liquid Retina, USB-C"
  },
  {
    id: 'p15',
    name: 'Xiaomi 14 Ultra',
    description: 'Flagship Xiaomi hợp tác cùng Leica, camera periscope zoom 5x và sạc nhanh 90W vượt trội.',
    price: 27990000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000'],
    isFeatured: true,
    category: 'Điện thoại',
    stock: 9,
    specs: "Snapdragon 8 Gen 3, RAM 16GB, Camera Leica 50MP, Pin 5000mAh, Sạc 90W"
  },
  {
    id: 'p16',
    name: 'Keychron K2 Pro',
    description: 'Bàn phím cơ không dây hot-swap, layout 75%, kết nối đa thiết bị Bluetooth và USB-C.',
    price: 2190000,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000',
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1000'],
    isFeatured: false,
    category: 'Phụ kiện',
    stock: 30,
    specs: "Layout 75%, Hot-swap, Bluetooth 5.1 + USB-C, Pin 4000mAh, Đèn nền RGB"
  }
];

export const MOCK_CATEGORIES = ['Tất cả', 'Điện thoại', 'Laptop', 'Máy tính bảng', 'Phụ kiện'];
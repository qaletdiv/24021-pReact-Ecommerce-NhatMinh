import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Result, Descriptions, Tag } from 'antd';

const formatCurrency = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  if (!order) {
    return (
      <div className="container mx-auto py-16">
        <Result
          status="error"
          title="Không tìm thấy thông tin đơn hàng"
          extra={
            <Button type="primary" onClick={() => navigate('/')}>
              Về trang chủ
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Result
        status="success"
        title="Đặt hàng thành công!"
        subTitle={`Mã đơn hàng: ${order.id} — Chúng tôi sẽ liên hệ xác nhận sớm nhất.`}
        extra={[
          <Button type="primary" key="account" onClick={() => navigate('/my-account')}>
            Xem lịch sử đơn hàng
          </Button>,
          <Button key="home" onClick={() => navigate('/')}>
            Tiếp tục mua sắm
          </Button>,
        ]}
      />

      <div className="bg-white rounded-lg shadow p-6 mt-2">
        <h3 className="font-semibold text-lg mb-4">Thông tin giao hàng</h3>
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label="Họ và tên">{order.shippingInfo.fullName}</Descriptions.Item>
          <Descriptions.Item label="Số điện thoại">{order.shippingInfo.phone}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ">{order.shippingInfo.address}</Descriptions.Item>
          <Descriptions.Item label="Trạng thái">
            <Tag color="gold">{order.status}</Tag>
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-4">
        <h3 className="font-semibold text-lg mb-4">Sản phẩm đã đặt</h3>
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 py-2 border-b last:border-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{item.name}</div>
              <div className="text-gray-500 text-sm">x{item.quantity}</div>
            </div>
            <div className="font-medium whitespace-nowrap">
              {formatCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4 pt-3 border-t">
          <span className="font-bold text-lg">Tổng cộng:</span>
          <span className="font-bold text-xl text-red-500">{formatCurrency(order.total)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

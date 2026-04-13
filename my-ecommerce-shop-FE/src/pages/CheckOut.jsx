import React, { useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Input, Button, Typography, Divider, message } from 'antd';
import { clearCart } from '../features/cart/cartSlice';
import { checkoutSchema } from '../utils/validationSchema';

const { Title, Text } = Typography;

const formatCurrency = (v) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v);

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/checkout' } });
    } else if (items.length === 0) {
      navigate('/cart');
    }
  }, [isLoggedIn, items.length, navigate]);

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      fullName: user?.fullName || '',
      phone: '',
      address: '',
    },
  });

  const total = useMemo(
    () => items.reduce((s, it) => s + it.price * (it.quantity || 1), 0),
    [items]
  );

  const onSubmit = useCallback((data) => {
    const now = Date.now();
    const order = {
      id: `ORD-${now}`,
      userEmail: user.email,
      shippingInfo: data,
      items,
      total,
      status: 'Đang xử lý',
      createdAt: now,
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

    // Navigate to confirmation page first, then clear the cart to avoid
    // the component redirecting back to cart because items become empty.
    message.success('Đặt hàng thành công!');
    navigate('/order-confirmation', { state: { order } });
    dispatch(clearCart());
  }, [user, items, total, dispatch, navigate]);

  if (!isLoggedIn || items.length === 0) return null;

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <Title level={2}>Thanh toán</Title>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Form thông tin giao hàng */}
        <div className="bg-white rounded-lg shadow p-6">
          <Title level={4}>Thông tin giao hàng</Title>
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            <Form.Item
              label="Họ và tên"
              validateStatus={errors.fullName ? 'error' : ''}
              help={errors.fullName?.message}
            >
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => <Input {...field} placeholder="Nguyễn Văn A" />}
              />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              validateStatus={errors.phone ? 'error' : ''}
              help={errors.phone?.message}
            >
              <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input {...field} placeholder="0901234567" />}
              />
            </Form.Item>

            <Form.Item
              label="Địa chỉ giao hàng"
              validateStatus={errors.address ? 'error' : ''}
              help={errors.address?.message}
            >
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Input.TextArea
                    {...field}
                    rows={3}
                    placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                  />
                )}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" size="large" block>
              Xác nhận đặt hàng
            </Button>
          </Form>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div className="bg-white rounded-lg shadow p-6">
          <Title level={4}>Tóm tắt đơn hàng</Title>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{item.name}</div>
                  <div className="text-gray-500 text-sm">x{item.quantity}</div>
                </div>
                <div className="font-medium text-sm whitespace-nowrap">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>
          <Divider />
          <div className="flex justify-between items-center">
            <Text strong className="text-lg">Tổng cộng:</Text>
            <Text strong className="text-xl text-red-500">{formatCurrency(total)}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

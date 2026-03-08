import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  fullName: yup.string().required('Họ tên không được để trống'),
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup.string().min(6, 'Mật khẩu phải ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không khớp')
    .required('Vui lòng nhập lại mật khẩu'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
});

export const checkoutSchema = yup.object().shape({
  fullName: yup.string().required('Họ tên không được để trống'),
  phone: yup
    .string()
    .matches(/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ (9–11 chữ số)')
    .required('Số điện thoại là bắt buộc'),
  address: yup.string().required('Địa chỉ không được để trống'),
});
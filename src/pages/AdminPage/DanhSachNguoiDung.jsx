import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import { quanLyUser } from '../../services/quanLyUser';

const DanhSachNguoiDung = () => {
  const [arrUser, setArrUser] = useState([]);
  const columns = [
    {
      title: 'STT',
      key: 'index',
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      responsive: ['sm'],
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
    },
    {
      title: 'Loại người dùng',
      dataIndex: 'maLoaiNguoiDung',
      render: (text) => {
        return text == 'KhachHang' ? (
          <Tag color="#f50">Khách hàng</Tag>
        ) : (
          <Tag color="#108ee9">Quản trị</Tag>
        );
      },
      responsive: ['sm'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      responsive: ['sm'],
    },
    {
      title: 'SĐT',
      dataIndex: 'soDT',
    },
  ];
  useEffect(() => {
    quanLyUser
      .layDanhSachNguoiDung()
      .then((res) => setArrUser(res.data.content))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-1 pb-5">
        Danh sách người dùng
      </h1>
      <Table
        columns={columns}
        dataSource={arrUser}
        pagination={{ defaultPageSize: 15 }}
      />
    </div>
  );
};

export default DanhSachNguoiDung;

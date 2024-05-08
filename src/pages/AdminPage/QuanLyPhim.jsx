import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import moment from 'moment';

const QuanLyPhim = () => {
  const [arrPhim, setArrPhim] = useState();
  const columns = [
    {
      title: 'STT',
      key: 'index',
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, record) => (
        <img
          src={record.hinhAnh}
          alt={record.tenPhim}
          style={{ width: '200px', height: '200px' }}
        />
      ),
      responsive: ['sm'],
    },
    {
      title: 'Đang chiếu',
      dataIndex: 'dangChieu',
      render: (text, record) => (
        <div>
          {record.dangChieu && <Tag color="blue">Đang chiếu</Tag>}
          {record.sapChieu && <Tag color="green">Sắp chiếu</Tag>}
          {record.hot && <Tag color="volcano">Hot</Tag>}
        </div>
      ),
      responsive: ['sm'],
    },
    {
      title: 'Ngày khởi chiếu',
      dataIndex: 'ngayKhoiChieu',
      render: (text, record) => moment(text).format('hh-mm - MMMM Do YYYY'),
    },
  ];
  useEffect(() => {
    quanLyPhimServ
      .layDanhSachPhim()
      .then((res) => {
        setArrPhim(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center pt-1 pb-5">
        Danh sách phim
      </h1>
      <Table
        columns={columns}
        dataSource={arrPhim}
        pagination={{ defaultPageSize: 8 }}
      />
    </div>
  );
};

export default QuanLyPhim;

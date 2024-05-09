import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleTurnOffLoading,
  handleTurnOnLoading,
} from '../../redux/slice/loadingSlice';
import Loading from '../../components/Loading/Loading';

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
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loadingSlice.isLoading);
  useEffect(() => {
    dispatch(handleTurnOnLoading());
    quanLyPhimServ
      .layDanhSachPhim()
      .then((res) => {
        setTimeout(() => {
          setArrPhim(res.data.content);
          dispatch(handleTurnOffLoading());
        }, 1000);
      })
      .catch((err) => {
        dispatch(handleTurnOffLoading());
      });
  }, []);
  return (
    <div>
      {isLoading && <Loading />}
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

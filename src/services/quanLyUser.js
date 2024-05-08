import { http } from './config';

export const quanLyUser = {
  layDanhSachNguoiDung: () => {
    return http.get('/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
  },
};

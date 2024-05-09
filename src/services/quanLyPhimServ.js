import { http } from './config';

export const quanLyPhimServ = {
  layDanhSachBanner: () => {
    return http.get('/QuanLyPhim/LayDanhSachBanner');
  },
  layDanhSachPhim: () => {
    return http.get('/QuanLyPhim/LayDanhSachPhim?maNhom=GP01');
  },
  layThongTinPhim: (maPhim) => {
    return http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
};

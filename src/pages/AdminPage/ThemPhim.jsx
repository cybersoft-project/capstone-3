import React, { useState } from 'react';
import { DatePicker, Switch, Rate } from 'antd';
import InputText from '../../components/Input/InputText/InputText';
import { useFormik } from 'formik';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import moment from 'moment';
import * as Yup from 'yup';

const ThemPhim = () => {
  const [image, setImage] = useState('');
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      tenPhim: '',
      trailer: '',
      moTa: '',
      maNhom: 'GP01',
      ngayKhoiChieu: '',
      sapChieu: true,
      dangChieu: true,
      hot: true,
      danhGia: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      for (let key in values) {
        if (key == 'hinhAnh') {
          formData.append('File', values[key]);
        } else {
          formData.append(key, values[key]);
        }
      }
      quanLyPhimServ
        .themPhimUploadHinh(formData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      tenPhim: Yup.string().required('Tên phim không được để trống'),
      trailer: Yup.string().required('Trailer không được để trống'),
    }),
  });
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Thêm phim</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-5 mt-5 sm:grid-cols-2">
          <InputText
            value={values.tenPhim}
            name="tenPhim"
            handleChange={handleChange}
            placeholder="Nhập tên phim"
            label="Tên phim"
            handleBlur={handleBlur}
            touched={touched.tenPhim}
            error={errors.tenPhim}
          />
          <InputText
            value={values.trailer}
            name="trailer"
            handleChange={handleChange}
            placeholder="Nhập trailer"
            label="Trailer"
            handleBlur={handleBlur}
            touched={touched.trailer}
            error={errors.trailer}
          />
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-between col-span-2">
            {/* Ngày khởi chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Ngày khởi chiếu:
              </label>
              <DatePicker
                className="w-full h-3/4"
                format="DD-MM-YYYY"
                onChange={(date, dateString) => {
                  setFieldValue('ngayKhoiChieu', dateString);
                }}
                disabledDate={(current) => {
                  // Không cho phép chọn ngày trong quá khứ
                  return current && current < moment().startOf('day');
                }}
              />
            </div>
            {/* Đang chiếu  */}
            <div className="2xl:mt-0 mt-4">
              <label htmlFor="" className="block mb-2">
                Đang chiếu:
              </label>
              <Switch
                onChange={(checked, event) => {
                  setFieldValue('dangChieu', checked);
                }}
                value={values.dangChieu}
              />
            </div>
            {/* Sắp chiếu  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Sắp chiếu:
              </label>
              <Switch
                onChange={(checked, event) => {
                  setFieldValue('sapChieu', checked);
                }}
                value={values.sapChieu}
              />
            </div>
            {/* Hot  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Hot:
              </label>
              <Switch
                onChange={(checked, event) => {
                  setFieldValue('hot', checked);
                }}
                value={values.hot}
              />
            </div>
            {/* Đánh giá  */}
            <div>
              <label htmlFor="" className="block mb-2">
                Đánh giá: (trên thang điểm 10, mỗi ngôi sao 2 điểm)
              </label>
              <Rate
                onChange={(value) => {
                  setFieldValue('danhGia', value * 2);
                }}
                allowHalf
              />
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="" className="block mb-1">
              Mô tả:
            </label>
            <textarea
              onChange={handleChange}
              name="moTa"
              id=""
              cols="30"
              rows="10"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          <div className="col-span-2">
            <label htmlFor="">Hình ảnh film: </label>
            <div className="relative w-48">
              <img className="w-40" src={image} alt="" />
              {image && (
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={() => {
                    setImage(null);
                    setFieldValue('hinhAnh', null);
                  }}
                >
                  X
                </button>
              )}
            </div>
            <input
              type="file"
              name="hinhAnh"
              onChange={(event) => {
                const img = event.target.files[0];
                if (img) {
                  const urlImg = URL.createObjectURL(img);
                  setImage(urlImg);
                  setFieldValue('hinhAnh', img);
                }
              }}
              accept="image/*"
            />
          </div>
          <div>
            <button className="py-2 px-5 rounded bg-black text-white">
              Thêm phim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThemPhim;

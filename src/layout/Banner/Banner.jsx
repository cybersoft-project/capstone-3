import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import "./Banner.scss";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
};

const Banner = () => {
  const [arrBanner, setArrBanner] = useState([]);
  useEffect(() => {
    quanLyPhimServ
      .layDanhSachBanner()
      .then((res) => {
        // console.log(res)
        setArrBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="banner_home">
      <Carousel
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        arrows={true}
        dots={false}
      >
        {arrBanner.map((item, index) => {
          return (
            <div key={index} className="h-[80vh]">
              <img
                className="w-full h-full object-cover"
                src={item.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;

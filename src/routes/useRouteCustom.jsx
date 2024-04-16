import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
import HomePage from '../pages/HomePage/HomePage';
import { path } from '../common/path';
import LoginPage from '../pages/LoginPage/LoginPage';
import DetaiPage from '../pages/DetaiPage/DetaiPage';
import BookingPage from '../pages/BookingPage/BookingPage';
import SignUpPage from '../pages/SignupPage.jsx/SignUpPage';
import QuanLyPhim from '../pages/AdminPage/QuanLyPhim';
import DemoPage from '../pages/DemoPage/DemoPage';
// đây là một customHook hỗ trợ quản lí các tuyến đường của trang
const useRouteCustom = () => {
  const route = useRoutes([
    {
      path: path.homepage,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: path.detail,
          element: <DetaiPage />
        },
        {
          path: path.booking,
          element: <BookingPage />
        }
      ],

    },
    {
      path: path.login,
      element: <LoginPage />
    },
    {
      path: path.signup,
      element: <SignUpPage />
    },
    {
      path: path.quanLyPhim,
      element: <QuanLyPhim />
    },
    {
      path: path.themPhim,
      element: <themPhim />
    },
    {
      path: path.demo,
      element: <DemoPage />
    }

  ]);
  return route;
};

export default useRouteCustom;

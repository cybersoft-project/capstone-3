import React, { useContext, useState } from 'react';
import MovieDetailModal from '../MovieDetailModal/MovieDetailModal';
import { formatDate } from '../../utils/Date';

// MovieCard component
const MovieCard = ({ tenPhim, ngayKhoiChieu, language= "English", hinhAnh,moTa, toggle}) => {
  
  return (
    
    <div className="max-w-sm rounded overflow-hidden bg-white ">
      <div className="w-full max-h-64 h-2/3 overflow-hidden"><img className="w-full object-cover h-full" src={hinhAnh} alt={tenPhim} /></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate">{tenPhim}</div>
        <p className="text-gray-700 text-base truncate">
          U/A • Action
        </p>
        <small>{language}</small>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-between">
        <button className="bg-primary hover:bg-opacity-90 text-black font-semibold py-2 px-4 truncate text-sm rounded">
          Book Tickets
        </button>
        <button 
          onClick={()=>{toggle({tenPhim, ngayKhoiChieu, language, hinhAnh, moTa})}}
          className="float-right text-black hover:text-gray-600 border border-gray-500 rounded-lg py-1 px-2">
         <i className="fa-light fa-circle-info"></i>
        </button>
      </div>
      
    </div>
  );
};

export default MovieCard;

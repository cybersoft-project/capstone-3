import React, { useContext, useEffect, useRef, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import { quanLyPhimServ } from '../../services/quanLyPhimServ';
import { AlertContext } from '../../App';
import MovieDetailModal from '../../components/MovieDetailModal/MovieDetailModal';

const ListMovie = ({ id }) => {

    const [isToggled, setIsToggled] = useState(false);
    const [animation, setAnimation] = useState('');
    const modalRef = useRef(null);  // Tạo một ref để tham chiếu tới phần tử modal

    // Hàm xử lý toggle
    // Hàm xử lý toggle



    const { handleAlert } = useContext(AlertContext)
    const [movieList, setMovieList] = useState([])
    useEffect(() => {
        quanLyPhimServ.layDanhSachPhim().then(res => {
            handleAlert("success", "Lấy danh sách phim thành công");
            setMovieList(res.data.content);
        }).catch(error => {
            handleAlert("error", "Lấy danh sách phim thất bại")
        })
    }, [])
    // Thêm sự kiện nghe click vào document
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setAnimation('animate-slide-down');
                setTimeout(() => {
                    setIsToggled(false);
                }, 500); // Thời gian đợi tương ứng với duration của animation
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, [])
    const toggle = () => {
        console.log(isToggled, '######')
        if (!isToggled) {
            setIsToggled(true);
            setAnimation('animate-slide-up');
        }
        else{
            setAnimation('animate-slide-down');
            setTimeout(() => {
                setIsToggled(false);
            }, 500); // Thời gian đợi tương ứng với duration của animation
        }
    };
    const movieData = {
        title: "MAIDAAN",
        duration: "3h 02m",
        genre: "Drama, Sports",
        language: "Hindi",
        releaseDate: "Apr 10, 2024",
        synopsis: "Inspired by the Indian national football team coach and manager...",
        cast: [
          // ... populate with cast data
        ],
        crew: [
          // ... populate with crew data
        ],
      };
    
    return (
        <div className="" id={id}>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 my-8 text-center">Now Showing</h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 place-items-center sm:place-items-stretch">
                {movieList.map((movie, index) => (
                    <MovieCard key={index} {...movie} toggle={toggle} />
                ))}
            </div>
            <MovieDetailModal {...movieData} modalRef={modalRef} isToggled={isToggled} animation={animation} toggle={toggle}/>
        </div>
    )
}

export default ListMovie
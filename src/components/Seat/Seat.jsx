import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateArrSeat, updateSeat } from '../../redux/slice/initReducer';
import "./Seat.scss"

const Seat = () => {
    const { arrSeat, arrConfirmSeats } = useSelector(reducer => reducer.initReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const response = axios({
            url: './danhSachGhe.json',
            method: 'GET'
        })
        response.then((resolve) => {
            dispatch(updateSeat(resolve.data))

        }).catch(error => {
            throw error;
        })

    }, []);

    const findRowIndex = (row) => {
        return arrSeat.findIndex(item => item.hang == row);
    }
    const datChoAction = ({ hang, cot, bool }) => {
        const rowIndex = findRowIndex(hang)

        const updateSeat = [...arrSeat];
        dispatch(updateArrSeat({ bool, hang, cot, arrSeat }))
        // dispatch(updateSeat(updateSeat));
    }
    // datChoHandling(true, "A", 1);

    return (
        <div className="container col-span-8">
            {/* {console.log('render', arrSeat)} */}
            <div className="w3ls-reg">
                {/* input fields */}

                {/* //input fields */}
                {/* seat availabilty list */}
                <ul className="seat_w3ls">
                    <li className="smallBox greenBox">Selected Seat</li>
                    <li className="smallBox redBox">Reserved Seat</li>
                    <li className="smallBox emptyBox">Empty Seat</li>
                </ul>
                {/* seat availabilty list */}
                {/* seat layout */}
                <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
                    <p id="notification" /><table id="seatsBlock">
                        <tbody>
                            {/* {console.log("render -x", arrSeat)} */}
                            {
                                arrSeat?.map(({ hang, danhSachGhe }, index) => {

                                    return <tr key={index}>
                                        <td>{hang}</td>
                                        {danhSachGhe.map(({ soGhe, gia, daDat }, index) => {
                                            let isConfirm = arrConfirmSeats.includes(soGhe);
                                            console.log(isConfirm)
                                            return (<td key={index}>
                                                {!hang && (<p>{soGhe}</p>)}
                                                {hang && (
                                                    <input type="checkbox" className={`seats ${isConfirm?'redBox':''}`} disabled={isConfirm?false:true} checked={daDat} onChange={() => {
                                                        datChoAction({ hang, cot: index + 1, bool: !daDat })
                                                    }} />
                                                )}
                                            </td>)
                                        })}
                                    </tr>
                                })
                            }
                        </tbody></table>
                    <div className="screen">
                        <h2 className="wthree">Screen this way</h2>
                    </div>
                    <button>Confirm Selection</button>

                </div>
                {/* //seat layout */}
                {/* details after booking displayed here */}

            </div>
        </div>
    )
}

export default Seat
import { createSlice } from '@reduxjs/toolkit'
// import { getArrSeat } from '../../utils/utils';
let data;

const initialState = {
  arrSeat: [],
}

const initReducer = createSlice({
  name: 'init',
  initialState,
  reducers: {
    updateSeat: (state, {type, payload})=>{
      state.arrSeat = [...payload]
    },
    updateArrSeat: (state, {type, payload})=>{
      const {hang, cot, arrSeat, bool} = payload;
      const axis = arrSeat.findIndex(item=>item.hang==hang);
      const newArrSeat = [...arrSeat]
      newArrSeat[axis] = {...newArrSeat[axis]}
      newArrSeat[axis].danhSachGhe = [...newArrSeat[axis].danhSachGhe];
      newArrSeat[axis].danhSachGhe[cot-1] = {...newArrSeat[axis].danhSachGhe[cot-1]}
      newArrSeat[axis].danhSachGhe[cot-1].daDat = bool;
      state.arrSeat = newArrSeat;
    }
    
  }
});

export const {updateSeat, updateArrSeat} = initReducer.actions

export default initReducer.reducer
import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils/utils';

const initialState = {
  user: getLocalStorage('userData'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleGetValueUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { handleGetValueUserData } = userSlice.actions;

export default userSlice.reducer;

// export const getUserAPIThunk = createAsyncThunk(
//   'phim/getUserAPIThunk',
//   async (user, { dispatch }) => {
//     const res = await quanLyUser.layThongTinNguoiDung();
//     console.log(user);
//     return res.data.content;
//   }
// );

// const initialState = {
//   arrUser: [],
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getUserAPIThunk.fulfilled, (state, action) => {
//       console.log(action);
//       state.arrUser = action.payload;
//     });
//     builder.addCase(getUserAPIThunk.rejected, (state, action) => {
//       console.log(action);
//     });
//   },
// });

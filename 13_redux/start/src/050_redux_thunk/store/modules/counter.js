import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { asyncCount } from '../../api/counter'

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: "ボタンを押してください",
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.status = "pending....";
    })
    .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
      state.status = "成功";
      state.count = state.count + action.payload;
    })
    .addCase(addAsyncWithStatus.rejected, (state) => {
      state.status = "エラーが発生しました。";
    })
    builder.addCase(minusAsyncWithStatus.pending, (state) => {
      state.status = "pending....";
    })
    .addCase(minusAsyncWithStatus.fulfilled, (state, action) => {
      state.status = "成功";
      state.count = state.count - action.payload;
    })
    .addCase(minusAsyncWithStatus.rejected, (state) => {
      state.status = "エラーが発生しました。";
    })
  }
})

const { add, minus } = counter.actions;

const addAsync = (count) => {
  return async (dispatch, getState) => {
    const res = await asyncCount(count);
    dispatch(add(res.data));
  }
};

const minusAsync = (count) => {
  return async (dispatch, getState) => {
    const res = await asyncCount(count);
    dispatch(minus(res.data));
  }
};

const addAsyncWithStatus = createAsyncThunk(
  "counter/addAsync",
  async(count) => {
    const res = await asyncCount(count);
    return res.data;
  }
);

const minusAsyncWithStatus = createAsyncThunk(
  "counter/minusAsync",
  async(count) => {
    const res = await asyncCount(count);
    return res.data;
  }
);


export { add, minus, addAsync, minusAsync, addAsyncWithStatus, minusAsyncWithStatus }
export default counter.reducer
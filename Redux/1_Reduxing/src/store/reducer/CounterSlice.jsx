import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount : (state , action) => {
      state.value -= action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount , decrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export const decrementAsync = (amount) => (dispatch)=> {
  setTimeout(()=>{
    dispatch(decrementByAmount(amount))
  }, 2000)
}


export default counterSlice.reducer;

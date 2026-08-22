import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      counterIncre: (state)=>{
        state.value += 1
      },

      incrWithAmount: (state, action)=>{
        state.value += action.payload
      },

      resetCounter: (state)=>{
        state.value = 0
      }

    }
})

export const { counterIncre, resetCounter,incrWithAmount } = counterSlice.actions;


export default counterSlice.reducer
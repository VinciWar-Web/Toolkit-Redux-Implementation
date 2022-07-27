import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({

  name: 'counter',
  initialState,

  reducers: {

    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    reset: (state) => {
      state.value = 0
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    
  },
})

// Los creadores de acciones se generan para cada función de reducción de casos.
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        inc: state => {
            state.value += 1
        },
        dec: state => {
            state.value -= 1
        },
        rnd: state => {
            state.value *= Math.floor(Math.random() * 10) + 1;
        }
    },
})
console.log(counterSlice.actions)
export const { inc, dec, rnd } = counterSlice.actions;
export default counterSlice.reducer;

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/TODO/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
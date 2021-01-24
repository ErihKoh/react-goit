import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksRedusers';

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

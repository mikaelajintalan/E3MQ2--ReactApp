import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './todoReducer';

export default configureStore({
  reducer: {
    todoReducer: ToDoReducer,
  },
});

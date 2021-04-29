import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './toDoReducer';

export default configureStore({
  reducer: {
    todoReducer: ToDoReducer,
  },
});

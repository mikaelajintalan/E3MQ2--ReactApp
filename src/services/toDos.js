import { ActionCreators } from '../redux/todoReducer';
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/todo',
})

export const GetToDos = async (dispatch) => {
    try {
        // api call
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setToDos(data));
    } catch {
        console.log('Error!');
    }
}

export const DeleteToDo = async (dispatch, toDo) => {
    try {
        // api call
        await axiosInstance.delete(`/${toDo.id}`);
        dispatch(ActionCreators.deleteToDo(toDo));
    } catch {
        console.log('Error!');
    }
}

export const NewToDo = async (dispatch, toDo) => {
    try {
        // api call
        const { data } = await axiosInstance.post('', toDo)
        dispatch(ActionCreators.newToDo(data));
    } catch {
        console.log('Error!');
    }
}

export const EditToDo = async (dispatch, toDo) => {
    try {
        // api call
        await axiosInstance.put('', toDo);
        dispatch(ActionCreators.editToDo(toDo));
    } catch {
        console.log('Error!');
    }
}
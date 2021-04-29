import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteToDo, GetToDos } from '../services/toDos';
import { Button } from 'react-bootstrap';
import { EditToDoModal } from './ToDoModal';

export const ToDoTable = () => {
    const toDo = useSelector(state => state.todoReducer.toDo);
    const dispatch = useDispatch();

    useEffect(() => {
        GetToDos(dispatch);
    }, []);

    return <table className='table table-dark'>
        <tbody>
            {
                toDo.map(n =>
                    <tr key={n.id}>
                        <td style={{ width: '3rem' }}>
                            <EditToDoModal toDo={n} />
                        </td>
                        <td style={{ width: '3rem' }}>
                            <Button className='btn btn-danger' onClick={() => DeleteToDo(dispatch, n)}>Delete</Button>
                        </td>
                        <td style={{ textAlign: 'left' }}>{n.value}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}
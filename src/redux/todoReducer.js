const initialState = {
    toDo: [],
}

export const ActionTypes = {
    SET_TODOS: 'SET_TODOS',
    DELETE_TODO: 'DELETE_TODO',
    NEW_TODO: 'NEW_TODO',
    EDIT_TODO: 'EDIT_TODO',
}

export const ActionCreators = {
    setToDos: payload => ({ type: ActionTypes.SET_TODOS, payload }),
    deleteToDo: payload => ({ type: ActionTypes.DELETE_TODO, payload }),
    newToDo: payload => ({ type: ActionTypes.NEW_TODO, payload }),
    editToDo: payload => ({ type: ActionTypes.EDIT_TODO, payload }),
}

export default function ToDoReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_TODO:
            return { ...state, toDos: [...action.payload] };
        case ActionTypes.DELETE_TODO:
            return {
                ...state, toDos: [...state.toDos.filter(toDo =>
                    toDo.id !== action.payload.id)]
            }
        case ActionTypes.NEW_TODO:
            return { ...state, toDos: [...state.toDos, action.payload] }
        case ActionTypes.EDIT_TODO:
            let toDos = state.toDos.map(toDo => {
                if (toDo.id === action.payload.id) {
                    toDo = action.payload
                }
                return toDo;
            })
            return { ...state, toDos: [...toDos] }
        default:
            return state;
    }
}
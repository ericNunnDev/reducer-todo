import {
    TOGGLE_COMPLETE,
} from '../actions';

const initialState = {
    item: [],
    completed: false,
    id: null,
    error: '',
    fetching: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                fetching: true
            };
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                item: action.payload,
                id: Date.now(),
                error: '',
                fetching: false
            };
        case ADD_TODO_FAIL: 
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
    }
}

export default reducer;
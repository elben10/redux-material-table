import {
    TABLE_REQUEST_ADD_ROW,
    TABLE_REQUEST_DELETE_ROW,
    TABLE_REQUEST_LOAD_PAGE,
    TABLE_REQUEST_UPDATE_ROW,
    TABLE_SUCCESSFUL_ADD_ROW,
    TABLE_SUCCESSFUL_DELETE_ROW,
    TABLE_SUCCESSFUL_LOAD_PAGE,
    TABLE_SUCCESSFUL_UPDATE_ROW,
    TABLE_UNSUCCESSFUL_ADD_ROW,
    TABLE_UNSUCCESSFUL_DELETE_ROW,
    TABLE_UNSUCCESSFUL_LOAD_PAGE,
    TABLE_UNSUCCESSFUL_UPDATE_ROW
} from '../constants';

const initialState = {
    columns: [
        { title: "Name", field: "first_name" },
        { title: "Surname", field: "last_name" },
        { title: "Email", field: "email" },
    ],
    rows: [],
    page: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TABLE_REQUEST_ADD_ROW:
            return {
                ...state
            };
        case TABLE_SUCCESSFUL_ADD_ROW:
            return {
                ...state,
                rows: [...state.rows, action.data]
            };
        case TABLE_UNSUCCESSFUL_ADD_ROW:
            return {
                ...state
            };
        case TABLE_REQUEST_DELETE_ROW:
            return {
                ...state
            };
        case TABLE_SUCCESSFUL_DELETE_ROW:
            return {
                ...state,
                rows: state.rows.filter(elem => elem.id !== action.id)
            };
        case TABLE_UNSUCCESSFUL_DELETE_ROW:
            return {
                ...state
            };
        case TABLE_REQUEST_LOAD_PAGE:
            return {
                ...state
            };
        case TABLE_SUCCESSFUL_LOAD_PAGE:
            return {
                ...state,
                page: action.page,
                rows: [...state.rows, ...action.data]
            };
        case TABLE_UNSUCCESSFUL_LOAD_PAGE:
            return {
                ...state
            };
        case TABLE_REQUEST_UPDATE_ROW:
            return {
                ...state
            };
        case TABLE_SUCCESSFUL_UPDATE_ROW:
            return {
                ...state,
                rows: state.rows.map(elem => elem.id === action.data.id ? action.data : elem)
            };
        case TABLE_UNSUCCESSFUL_UPDATE_ROW:
            return {
                ...state
            };
        default:
            return state;
    }
};
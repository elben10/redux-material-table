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

import axios from 'axios';

export const loadData = (page) => {
    return async (dispatch) => {
        dispatch({ type: TABLE_REQUEST_LOAD_PAGE });
        try {
            const resp = await axios.get("https://reqres.in/api/users", { params: { page: page + 1 } });
            if (resp.data.data.length) {
                dispatch({
                    type: TABLE_SUCCESSFUL_LOAD_PAGE,
                    data: resp.data.data,
                    page: page + 1
                });
            };
        } catch (err) {
            dispatch({
                type: TABLE_UNSUCCESSFUL_LOAD_PAGE
            });
        }
    };
};

export const addRow = (data) => {
    return async (dispatch, getState) => {
        const state = getState();
        dispatch({ type: TABLE_REQUEST_ADD_ROW });
        try {
            const id = Math.max.apply(null, state.table.rows.map(elem => elem.id)) + 1;
            dispatch({ type: TABLE_SUCCESSFUL_ADD_ROW, data: { id, ...data } });
        } catch (err) {
            dispatch({ type: TABLE_UNSUCCESSFUL_ADD_ROW });
        }
    };
};

export const deleteRow = (id) => {
    return async (dispatch) => {
        dispatch({ type: TABLE_REQUEST_DELETE_ROW });
        try {
            dispatch({ type: TABLE_SUCCESSFUL_DELETE_ROW, id: id });
        } catch (err) {
            dispatch({ type: TABLE_UNSUCCESSFUL_DELETE_ROW });
        }
    };
};

export const updateRow = (data) => {
    return async (dispatch) => {
        dispatch({ type: TABLE_REQUEST_UPDATE_ROW });
        try {
            dispatch({ type: TABLE_SUCCESSFUL_UPDATE_ROW, data: data });
        } catch (err) {
            dispatch({ type: TABLE_UNSUCCESSFUL_UPDATE_ROW });
        }
    };
};
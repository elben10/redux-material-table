import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    dummy: (state={}, action) => state
})

export default rootReducer;
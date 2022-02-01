import { createStore, combineReducers, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
import listReducer from './reducers/list-reducer'

export const initialState = {
    list: {
        status: 'void',
        data: null,
        error: null,
        
        post_status: 'void',
        post_data: null,
        post_error: null,

        collection: null,
        sorted: false,
        sortedBy: { sortParam: '', reverse: false },
        searchActive: false,
        searchTerm: '',

        collectionAsPages: null,
        entries: 15,
        currentPage: null,
        currentPageIndex: null,
        totalPages: 1
    }
}

// SELECTORS
export const listState = (initialState) => initialState.list

export const reducers = combineReducers({
    list: listReducer
})

export const rootReducer = (state, action) => { return reducers(state, action)}

//const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reduxDevtools =  window.__REDUX_DEVTOOLS_EXTENSION__
? window.__REDUX_DEVTOOLS_EXTENSION__()
: f => f
export const store = createStore(rootReducer, compose(applyMiddleware(thunk),reduxDevtools));

store.subscribe(() => { console.log('NEW STATE===>', store.getState())})
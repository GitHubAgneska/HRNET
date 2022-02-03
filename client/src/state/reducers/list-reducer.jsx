import {initialState } from '../store'
import produce from 'immer'
import { 
    LIST_FETCHING, LIST_RESOLVED, LIST_REJECTED,
    CREATE_EMPLOYEE_FETCHING, CREATE_EMPLOYEE_RESOLVED, CREATE_EMPLOYEE_REJECTED, ADD_NEW_EMPLOYEE,
    SETUP_COLLECTION,
    SET_ENTRIES_COUNT, SET_CURRENT_ACTIVE_PAGE, SET_CURRENT_PAGE_INDEX,
    SETUP_COLLECTION_AS_PAGES,SET_TOTAL_PAGES,

    SORT_STATUS_CHANGED, SORT_PARAM_CHANGED,
    SEARCHTERM_CHANGED
} from '../actions/actions-types'


// ......................................................
// EMPLOYEES LIST  REDUCER
// ......................................................
export default function listReducer(state = initialState.list, action) {

    return produce(state, (draft) => {
        switch (action.type) {
            // FETCH ACTIONS
            case LIST_FETCHING: {
                if ( draft.status === 'void') {
                    draft.status = 'loading'
                    return
                }
                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'loading'
                    return
                }
                if ( draft.status === 'resolved') {
                    draft.status = 'updating' // ongoing request but presence of data
                    return
                }
                return // else action ignored
            }
            case LIST_RESOLVED: {
                if ( draft.status === 'loading' || draft.status === 'updating') {
                    draft.status = 'resolved'
                    draft.data = action.payload
                    if ( !draft.collection ) { draft.collection = action.payload }
                    return 
                }
                return
            }
            case LIST_REJECTED: {
                if ( draft.status === 'loading' || draft.status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.status = 'rejected'
                    draft.error = action.payload
                    draft.payload = null
                    return 
                }
                return
            }
            // POST REQUEST ---------------------
            case CREATE_EMPLOYEE_FETCHING: {
                if ( draft.post_status === 'void') { 
                    draft.post_status = 'pending'
                    return
                }
                if ( draft.post_status === 'rejected') {
                    draft.post_error = null
                    draft.post_status = 'pending'
                    return
                }
                if ( draft.post_status === 'resolved') {
                    draft.post_status = 'updating' // ongoing request but presence of data
                    return
                }
                return
            }
            case CREATE_EMPLOYEE_RESOLVED: {
                // console.log('EMPLOYEE_CREATE_RESOLVED => PAYLOAD==', action.payload, action.payload.employee)
                if ( draft.post_status === 'pending' || draft.post_status === 'updating') {
                    draft.post_status = 'resolved'
                    let newEmployee = action.payload.employee
                    draft.post_data = newEmployee
                    draft.collection.push(newEmployee)
                    draft.data.push(newEmployee)
                    return
                }
                return
            }
            case CREATE_EMPLOYEE_REJECTED: {
                // console.log('CREATE_EMPLOYEE_REJECTED => PAYLOAD==', action.payload )
                if ( draft.post_status === 'pending' || draft.post_status === 'updating') {
                    // set to rejected, save error, delete data
                    draft.post_status = 'rejected'
                    draft.post_error = action.payload
                    draft.post_data = null
                    return
                }
                return
            }
            case ADD_NEW_EMPLOYEE: {
                    let newEmployee =  draft.post_data
                    console.log('REDUCER =>',newEmployee )   
                return
            }
            
            // CURRENT COLLECTION ( all results || sorted || searched )
            case SETUP_COLLECTION: {
                if (draft.collection) { draft.collection = null } // reset collection
                draft.collection = action.payload
                return
            }
            // PAGINATE ACTIONS (NOT ASYNC)
            case SET_ENTRIES_COUNT: {
                let newAmount = action.payload;
                return { ...state, entries: newAmount }
            }
            case SETUP_COLLECTION_AS_PAGES: {
                let pages = action.payload
                if (draft.collectionAsPages) { draft.collectionAsPages = null;   } // reset collection
                draft.collectionAsPages = pages 
                return
            }
            case SET_CURRENT_PAGE_INDEX: {
                let pageRequested = action.payload
                return { ...state, currentPageIndex: pageRequested  }
            }
            case SET_TOTAL_PAGES: {
                let newPagesAmount = action.payload;
                return { ...state, totalPages: newPagesAmount }
            }
            case SET_CURRENT_ACTIVE_PAGE: {
                let requestedIndex = action.payload
                return { ...state, currentPage: state.collectionAsPages[requestedIndex+1] }
            }
            // SORT ACTIONS
            case SORT_STATUS_CHANGED: { 
                let status = action.payload;
                return { ...state, sorted: status }
            }
            case SORT_PARAM_CHANGED: { 
                let { param, reverseOrder } = action.payload; 
                return { ...state, sortedBy: { param, reverseOrder } }
            }
            // SEARCH ACTIONS
            case SEARCHTERM_CHANGED: {
                let newSearchterm = action.payload
                return { ...state, searchTerm: newSearchterm, searchActive: true }
            }
            default: return state
        }
    })
}
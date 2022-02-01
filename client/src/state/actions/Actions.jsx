import { 
    LIST_FETCHING, LIST_RESOLVED, LIST_REJECTED,
    CREATE_EMPLOYEE_FETCHING, CREATE_EMPLOYEE_RESOLVED, CREATE_EMPLOYEE_REJECTED,ADD_NEW_EMPLOYEE,
    SETUP_COLLECTION,
    SET_ENTRIES_COUNT, SET_TOTAL_PAGES,
    SET_CURRENT_PAGE_INDEX, SET_CURRENT_ACTIVE_PAGE,
    SETUP_COLLECTION_AS_PAGES,
    SORT_STATUS_CHANGED, SORT_PARAM_CHANGED,
    SEARCHTERM_CHANGED
} from './actions-types'

// ................................................................................. 
// ACTIONS CREATORS : LIST 
// ................................................................................. 
// LIST - FETCH actions...................................................
export const listFetching = () => (dispatch) => (dispatch({type: LIST_FETCHING }))
export const listResolved = (data) => (dispatch) => (dispatch({type: LIST_RESOLVED, payload: data}))
export const listRejected = (error) => (dispatch) => (dispatch({type: LIST_REJECTED, payload: error}))
// POST - CREATE
export const createEmployeeFetching = (data) => (dispatch) => (dispatch({type: CREATE_EMPLOYEE_FETCHING, payload: data}))
export const createEmployeeResolved = (data) => (dispatch) => (dispatch({type: CREATE_EMPLOYEE_RESOLVED, payload: data}))
export const createEmployeeRejected = (error) => (dispatch) => (dispatch({type: CREATE_EMPLOYEE_REJECTED, payload: error}))
export const addNewEmployee = () => ({type: ADD_NEW_EMPLOYEE})

export const setCollection = (data) => (dispatch) => (dispatch({type: SETUP_COLLECTION, payload: data }))
// LIST - PAGINATE actions...............................................
export const setCollectionAsPages = (pages) => ({type: SETUP_COLLECTION_AS_PAGES, payload: pages})
export const setEntriesPerPage = (entries) => ({type: SET_ENTRIES_COUNT, payload: entries })
export const setTotalPages = (n) => ({type: SET_TOTAL_PAGES, payload: n})
export const setCurrentActivePageIndex = (i) => ({ type: SET_CURRENT_PAGE_INDEX, payload: i })
export const setCurrentActivePage = (i) => ({ type: SET_CURRENT_ACTIVE_PAGE, payload: i })

// LIST - SORT actions...................................................
export const sortStatusChanged = (data) => ({type: SORT_STATUS_CHANGED, payload: data })
export const sortParamChanged = (param, reverseOrder ) => ({ type: SORT_PARAM_CHANGED, payload: { param, reverseOrder } })
export const searchtermChanged = (searchterm) => ({ type: SEARCHTERM_CHANGED, payload: searchterm })

// ............................................
import { store, listState } from '../state/store'
import { 
    listFetching, listResolved, listRejected,
    setCollection,
    setEntriesPerPage, setTotalPages,
    setCurrentActivePage, setCurrentActivePageIndex,
    setCollectionAsPages,
    sortParamChanged, sortStatusChanged,
    searchtermChanged
} from '../state/actions/Actions'

// ......................................................
// FETCH
// ......................................................
/**
 * @route   GET /
 * @desc    Get all employees
 * @access  Public
 */
export async function fetchList(dispatch, getState) { // rtk = createAsyncThunk
    
    const status = listState(getState()).status
    if ( status === 'pending' || status === 'loading' ) { return }
    
    dispatch(listFetching())

    try {
        const response = await fetch('/api/employees')
        const data = await response.json()
        
        dispatch(listResolved(data))
        dispatch(setCollection(data))   // set default collection to all list
        dispatch(changeEntriesAmount(15))// set default entries to 15
    }
    catch (error) {
        dispatch(listRejected(error))
    }
}

// ......................................................
// SET UP PAGINATION : thunks dispatching multiple pagination actions
// ......................................................
export const updatePage = (pageNumber) => (dispatch, getState) => { 
    dispatch(setCurrentActivePageIndex(pageNumber))
    dispatch(setCurrentActivePage(pageNumber))
}


export const changeEntriesAmount = (entries) => (dispatch, getState) => {     
    dispatch(setEntriesPerPage(entries))

    const currentList = listState(getState()).collection; // console.log('CURRENTLIST COLLECTION WHEN SET COLLECTION AS PAGES (SET PAGE(entries))=========>', currentList)
    const currentActivePageIndex = listState(getState()).currentPageIndex
    
    let outputPages = []
    let from = 0
    let totalPages = Math.floor(currentList.length / entries)
    dispatch(setTotalPages(totalPages))
    
    // setup pages arrays
    for (let i = from; i <= totalPages; i++ ) {
        let to = from + entries
        outputPages.push(currentList.slice(from, to))
        from += entries
    }
    // set current page to default only if unset (otherwise keep current page after rearranging after entries amount changed)
    if ( !currentActivePageIndex ) { dispatch(setCurrentActivePageIndex(0)) }
    dispatch(setCollectionAsPages(outputPages))
}

// ......................................................
// LIST SORTING
// ......................................................
export const sortList = (sortParam, reverseOrder) => (dispatch, getState) => {

    const currentList = listState(getState()).collection
    store.dispatch(sortStatusChanged('true'))
    store.dispatch(sortParamChanged(sortParam, reverseOrder))

    const currentEntries = listState(getState()).entries

    let sortedList = [ ...currentList] // ---- for 'sort()' will try to mutate 'currentList' and fail ---- !
    
    if ( sortParam === 'state') {
        !reverseOrder?
            sortedList.sort( (a, b) => a[sortParam].name.localeCompare(b[sortParam].name))
            : sortedList.sort( (a, b) => b[sortParam].name.localeCompare(a[sortParam].name))
    } else { 
        !reverseOrder ?
            sortedList.sort( (a, b) => a[sortParam].localeCompare(b[sortParam])) // a, b = employee objects of employees array
            : sortedList.sort( (a, b) => b[sortParam].localeCompare(a[sortParam])) 
    }
    dispatch(setCollection(sortedList))
    dispatch(changeEntriesAmount(currentEntries))

}

// ......................................................
// LIST SEARCHING
// ......................................................
export const requestSetSearchTerm = (searchTerm) => { store.dispatch(searchtermChanged(searchTerm)) }
export const requestListAsSearchResults = (resultsOfClickedSuggestion) => { store.dispatch(setCollection(resultsOfClickedSuggestion)) }
export const requestSetAllSuggestionsAsResults = (suggested) => { store.dispatch(setCollection(suggested)) }



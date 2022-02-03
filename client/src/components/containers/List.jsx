import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'

import { sortList, updatePage, changeEntriesAmount, requestSetSearchTerm } from "../../features/list_feature"
import { setCollection } from '../../state/actions/Actions'

import Table from "../elements/Table/Table"
import Pagination from "../elements/Pagination/Pagination"
import SelectEntriesBox from '../elements/SelectEntriesBox/SelectEntriesBox'

import SearchBox from "../elements/SearchBox/SearchBox"
import { searchSuggestions } from '../../utils/searchText'

import { DataTablePageWrapper, DataTableContentWrapper,DataTableTopWrapper, TitleWrapper, StyledTitle  } from '../../style/global_style'


export const List = () => {

/*     useEffect(()=> {
        if (listStatus !== 'resolved') dispatch(fetchList)
    }, [dispatch, listStatus]) */

    const dispatch = useDispatch()

    const collection = useSelector(initialState => initialState.list.collection)
    const collectionAsPages = useSelector(initialState => initialState.list.collectionAsPages)
    const currentPageIndex = useSelector(initialState => initialState.list.currentPageIndex)
    const currentPageToDisplay = collectionAsPages[currentPageIndex]??collectionAsPages[0]
    const totalPages = useSelector(initialState => initialState.list.totalPages)

    const sortListBy = (filterParam, reverse ) => { dispatch(sortList(filterParam, reverse)) }
    const changePage = (pageNumber) => { console.log('page requested:', pageNumber); dispatch(updatePage(pageNumber))}

    const entriesOptions = [ 15, 30, 50]
    const currentEntriesAmount = useSelector(initialState => initialState.list.entries)
    const selectEntriesAmount = (n) => { dispatch(changeEntriesAmount(n)) }
    const currentlyShowing = currentPageToDisplay.length
    const listTotal = collection.length

    const input = document.querySelector('input')
    const [ searchInputValues, setSearchInputValues ] = useState("")
    const [ suggestions, setSuggestions ] = useState([])

    const originalListData = useSelector(initialState => initialState.list.data)


    const handleSearchChange = e => { 
        let query = e.target.value
        requestSetSearchTerm(query)
        if ( query.length > 2 ) {
            let sugg = searchSuggestions(query, collection)
            setSuggestions(sugg)
        } else { 
            setSuggestions([])
            dispatch(setCollection(originalListData))
            dispatch(changeEntriesAmount(currentEntriesAmount))
        }
    }

    const handleKeyDown = e => {
        const key = e.code; 
        if ( key === 'Enter' ) { validateCurrentSearch() }
    }

    const validateCurrentSearch = () => { 
        let suggestedResults = Array.from(suggestions.values()).flat()
        dispatch(setCollection(suggestedResults))
        dispatch(changeEntriesAmount(currentEntriesAmount))
        setSuggestions([])
    }

    const clearInput = () => {
        if ( input.value !== "" ) {
            setSearchInputValues("")
            input.value = ""
            setSuggestions([])
            dispatch(setCollection(originalListData))
            dispatch(changeEntriesAmount(currentEntriesAmount))
            requestSetSearchTerm('')
        } else { return }
    }

    const selectSuggestion = (suggestion) => {
        input.value = suggestion
        let resultsOfClickedSuggestion = suggestions.get(suggestion)
        setSuggestions([])
        dispatch(setCollection(resultsOfClickedSuggestion))
        dispatch(changeEntriesAmount(currentEntriesAmount))
    }

    const handleSearchSubmit = () => { return input.value !== ""? validateCurrentSearch() : null }


    return (

        <DataTablePageWrapper>
            <TitleWrapper>
                <StyledTitle>Employees list</StyledTitle>
            </TitleWrapper>

            <DataTableContentWrapper>

                <DataTableTopWrapper>
                <SearchBox 
                        handleSearchChange={handleSearchChange}
                        handleSearchSubmit={handleSearchSubmit}
                        clearInput={clearInput}
                        values={searchInputValues}
                        suggestions={suggestions}
                        selectSuggestion={selectSuggestion}
                        handleKeyDown={handleKeyDown}
                    /> 
                    <SelectEntriesBox 
                        options={entriesOptions}
                        selectEntriesAmount={selectEntriesAmount}
                        currentlyshowing={currentlyShowing}
                        listTotal={listTotal}
                    />
                </DataTableTopWrapper>

                { collection && collectionAsPages &&
                    <Table
                    currentPageToDisplay={currentPageToDisplay}
                    sortListBy={sortListBy}
                    />
                }

                <Pagination 
                    totalPages={totalPages}
                    currentActivePage={currentPageIndex}
                    changePage={changePage}
                />
            </DataTableContentWrapper>
        </DataTablePageWrapper>
    )
}
export default List
import List from "./List"
import React, { useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchList } from '../../features/list_feature'
import { LoadingSpinnerWrapper } from '../../style/global_style'

// spinner
import { css } from "@emotion/react"
import ClipLoader from "react-spinners/ClipLoader"
const override = css`
    display: block;
    margin: 0 auto;
    border-color: fuchsia;
`;

const ListPage = () => {
    
    const dispatch = useDispatch()
    const listStatus = useSelector(initialState => initialState.list.status)
    const pages = useSelector(initialState => initialState.list.collectionAsPages)
    const postStatus = useSelector(initialState => initialState.list.post_status)

    // list will fetch/refetch if listStatus or postStatus change
    useEffect(()=> {
        if (listStatus !== 'resolved' || postStatus !== 'void' ) dispatch(fetchList)
    }, [])

    // wait for pagination to be set (depends on initial fetch resolving)
    let proceed = false;
    if ( listStatus === 'pending' || listStatus === 'updating' ) { return 'loading' }
    else if ( listStatus === 'resolved') { pages?.length > 0 ? proceed=true:proceed=false; }
    
    return (

        <Suspense fallback={<div>Loading...</div>}>
            { proceed ?
            <List />
            :<LoadingSpinnerWrapper><ClipLoader css={override} size={100} /><p>Loading...</p></LoadingSpinnerWrapper>
            }
        </Suspense>
    )
}

export default ListPage
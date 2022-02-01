import React, {Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';

import { fetchList } from './features/list_feature'

import Header from './components/layout/Header/Header'
import CreateEmployee from './components/containers/Create-employee'
import List from './components/containers/List';
import NotFoundPage from './components/containers/404'

import { GlobalStyle, LoadingSpinnerWrapper } from './style/global_style'

// spinner
import { css } from "@emotion/react"
import ClipLoader from "react-spinners/ClipLoader"
const override = css`
    display: block;
    margin: 0 auto;
    border-color: fuchsia;
`;

const App = () => {


    const dispatch = useDispatch()
    const listStatus = useSelector(initialState => initialState.list.status)
    const pages = useSelector(initialState => initialState.list.collectionAsPages)

    useEffect(()=> {
        if (listStatus !== 'resolved') dispatch(fetchList)
    }, [dispatch, listStatus])

    // wait for pagination to be set (depends on initial fetch resolving)
    let proceed = false;
    if ( listStatus === 'pending' || listStatus === 'updating' ) { return 'loading' }
    else if ( listStatus === 'resolved') { pages?.length > 0 ? proceed=true:proceed=false; }

    return (
        <div className="App">
            <GlobalStyle />
                <div className="container">
                    <Router>
                        <Header /> {/* INSIDE router because contains NAV with 'LINK TO'  */}

                        { proceed ?
                            <Fragment>
                                <Switch>
                                    <Route exact path="/"  render={() => <Redirect to="/create-employee" />} />
                                    <Route exact path="/create-employee" component={CreateEmployee} />
                                        <Route exact path="/employees-list" component={List} />
                                    <Route component={NotFoundPage} />
                                </Switch>
                            </Fragment>
                        : <LoadingSpinnerWrapper><ClipLoader css={override} size={100} /><p>Loading...</p></LoadingSpinnerWrapper>
                        }

                    </Router>

            </div>
        </div>
    )
}
export default App

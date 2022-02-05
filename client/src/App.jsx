import React, {Fragment, Suspense, lazy } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Redirect} from 'react-router-dom/cjs/react-router-dom.min';

import Header from './components/layout/Header/Header'
import CreateEmployee from './components/containers/Create-employee'

import NotFoundPage from './components/containers/404'
import HomePage from './components/containers/Home-page';

import { GlobalStyle } from './style/global_style'


// import ListPage from './components/containers/List-page'
const ListPage = lazy(() => import('./components/containers/List-page'));

const App = () => {

    return (
        <div className="App">
            <GlobalStyle />
                <div className="container">
                    <Router>
                        <Header /> {/* INSIDE router because contains NAV with 'LINK TO'  */}

                        <Fragment>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    <Route exact path="/"  render={() => <Redirect to="/home" />} />
                                    <Route exact path="/home" component={HomePage} />
                                    <Route exact path="/create-employee" component={CreateEmployee} />
                                    <Route exact path="/employees-list" component={ListPage} />
                                    <Route component={NotFoundPage} />
                                </Switch>
                            </Suspense>
                        </Fragment>

                    </Router>

            </div>
        </div>
    )
}
export default App

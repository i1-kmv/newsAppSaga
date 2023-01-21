import React from 'react'
import ReactDOM from 'react-dom'
import { Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './index.css'
import App from './App'
import store from "./redux/store"
import {Provider} from "react-redux"
import Home from "./pages/home/Home";
import LatestNews from "./pages/latestNews/LatestNews";
import PopularNews from "./pages/popularNews/PopularNews";


const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/latest-news" exact>
                            <LatestNews />
                        </Route>
                        <Route path="/popular-news" exact>
                            <PopularNews />
                        </Route>
                    </Switch>
                </App>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


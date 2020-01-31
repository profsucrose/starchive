import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Home from './Home'
import Header from './header/Header'
import Article from './pages/Article'
import Category from './pages/Category'

const App = props => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/s/:category" exact component={Category} />
                        <Route path="/s/:category/:id" exact component={Article} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App
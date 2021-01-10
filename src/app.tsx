import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import './styles/styles'
import './styles/less.less'

import Header from './components/header'

import {Main} from './pages/main'
import {About} from './pages/about'
import {TodosPage} from './pages/todosPage'




 const App: React.FC = () => {
    
    return (

        <BrowserRouter>
        <Header/>
        <div className="container">
            <Switch>
                <Route component={Main} path="/" exact/>
                <Route component={About} path="/about" exact/>
                <Route component={TodosPage} path="/todos" exact/>
            </Switch>
        </div>
    </BrowserRouter>

    )
}

export default App;
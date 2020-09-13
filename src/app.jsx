import React, {useState} from 'react'
import './styles/styles'
import './styles/less.less'
import Header from './components/header'


 const App = () => {
    

    return (
        <>
            <Header/>
            <div className="container">
                <p>Dev server run</p>
            </div>
        </>
    )
}

export default App;
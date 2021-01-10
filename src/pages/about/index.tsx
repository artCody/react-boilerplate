import React from 'react'
import {useHistory} from 'react-router-dom'

export const About: React.FC = () => {

    const history = useHistory()

    return <div>
        <h1>About page</h1>
        <button onClick={()=>history.push('/')}>to page home</button>
    </div>
}
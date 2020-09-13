import json from './assets/json'
import React from 'react'
import {render} from 'react-dom'
import App from './app'
 
console.log('json', json)

render(<App/>, document.getElementById('app'))
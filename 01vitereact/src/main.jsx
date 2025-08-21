import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myapp (){
    return(
        <div>
            <a href="https://google.com" target='_blank'>click me to visit the google !!!</a>
        </div>
    )
}

const anotheruser = "misty"

const reactElement = React.createElement(
    "a",
    {href:"https://google.com",target:"_blank"},
    "click me !!!",
    <br />,
    anotheruser
)


createRoot(document.getElementById('root')).render(
  

    reactElement
)

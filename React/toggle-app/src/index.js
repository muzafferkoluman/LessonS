import React from "react"
import ReactDOM  from "react-dom"

function App(){
    return <h1>Test</h1>
}

// Bu eski yontem ile yapildi.
class App2 extends React.Component{
    render(){
        return <h2>Test 3</h2>
    }
}

ReactDOM.render(
    <App2 />,
    document.getElementById("root")
    
)
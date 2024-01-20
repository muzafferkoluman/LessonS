import React from "react"
import ReactDOM  from "react-dom"

function App(){
    return <div>
        <button style={{padding:10,color:"blue",fontSize:18}}>Click me</button>
    </div>
}

// Bu eski yontem ile yapildi.
class App2 extends React.Component{
    render(){
        return <h2>Test 3</h2>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
    
)
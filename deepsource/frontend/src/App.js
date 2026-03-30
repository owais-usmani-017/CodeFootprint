/*function App() {
  return (
    <h1>Hello Om 🚀 Your React is working!</h1>
  );
}

export default App;*/

/*import React from "react";
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
      show:false
    }
    console.log("Constructor Phase")
  }
  commponentDidMount(){
    console.log("Component Did Mount")
    console.log("this.state.count+1")
  }
  update(){
    this.setState({count: this.state.count+1})
    console.log("this.state.count")
  }
  commponentDidUpdate(){
    console.log("Commponent Did Update Phase")
  }
  render(){
    console.log("Render Phase")
    return(
      <div>
        Hello Class Component-
        {this.state.count}
        <button onClick={()=>this.update()}>Update</button>
        <br />
        <button onClick={()=>this.setState({show: !this.state.show})}>
          {this.state.show?"Hide":"Show"}
        </button>
        <br />
        {
          this.state.show?<Msg/>:null;
        }
      </div>
    )
  }
}
export default App;*/

/*import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;*/

import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  function handleToggle() {
    if (show) {
      setCount(0);
    }
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {show ? "Hide" : "Show"}
      </button>

      {show && (
        <div>
          <h2>Count: {count}</h2>
          <button onClick={() => setCount(prev => prev + 1)}>
            Increment
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
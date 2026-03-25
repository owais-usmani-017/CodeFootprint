/*function App() {
  return (
    <h1>Hello Om 🚀 Your React is working!</h1>
  );
}

export default App;*/

import React from "react";
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
export default App;
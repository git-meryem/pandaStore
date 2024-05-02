import { Component } from "react";
import HelloWord from "../helloWord/HelloWord";

export default class ToggleName extends Component {
  constructor(props) {
    super(props);
    this.state = {
       displayName : true
    }
  }
  handleClick = () =>{
    this.setState(prevState=>{
        return{
            displayName:!prevState.displayName
    }})

  } 

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.state.displayName.toString()}</button>
        {this.state.displayName ? <HelloWord lastName={"essah"} /> : 'undefined'}
      </>
    );
  }
}

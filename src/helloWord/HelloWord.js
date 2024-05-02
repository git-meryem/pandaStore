import { Component } from "react";
import "./HelloWord.css";

export default class HelloWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "meryem",
      age: 22,
    };
  }

  clickAbout = () => {
    return alert("you are very smart");
  };
  sayHello = setInterval(() => {
    return console.log("hello!");
  }, 1000);

  componentDidMount() {
    console.log("component is mount");
    document.addEventListener("click", this.clickAbout);
    console.log(this.sayHello);
  }

  getSnapshotBeforeUpdate() {
    console.log("beforUpdate");
    return "hello";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component updated");
    console.log(snapshot);
    console.log("Didupdate");
  }

  componentWillUnmount() {
    console.log("component dead");
    document.removeEventListener("click", this.clickAbout);
    clearInterval(this.sayHello);
  }

  // handleChange = ()=>{
  //   this.setState(prev=>{
  //     return this.state.lastName :
  //   })
  // }

  handleChange = () => {
    this.setState((prevState) => {
      return {
        lastName: "doha",
      };
    });
  };
  handleChange3 = () => {
    this.setState((_) => {
      return {
        lastName: `${_.lastName} doha`,
      };
    });
  };
  handleChange2 = () => {
    this.setState(() => {
      return (this.state.lastName = "doha");
    });
  };
  // shouldComponentUpdate(nextProps,nextState,nextContent ){
  //   console.log(nextState , this.state);
  //   if(nextState.age != this.state.age){
  //     return false
  //   }else{
  //     return true
  //   }
  // }

  render() {
    return (
      <>
        <h3 className="title">hello {this.state.lastName}</h3>;
        <button onClick={this.handleChange}>change name</button>
        
      </>
    );
  }
}

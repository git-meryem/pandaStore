import { Component, useState, useEffect } from "react";

// export default class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1,
//     };
//   }

//   handelClick = ()=> {
//         this.setState(
//             oldState => {
//             return { counter: oldState.counter + 1 };
//           }
//         );
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handelClick}>click me to ++</button>
//         <p>il y'a {this.state.counter} seconde</p>
//       </>
//     );
//   }
// }

export default function Counter({ initialValue, step }) {
  const [value, setValue] = useState(initialValue);
  const [age, setAge] = useState();
  const [time, setTime] = useState(new Date());
  let timer = null;

  useEffect(() => {
    console.log("useEffect component is mount !");
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log("useEffect component is updated !");
  }, [value]);

  useEffect(() => {
    console.log("useEffect every Time render!");
    // setTime(new Date())
  });

  const onmout = () => {
    setTime(new Date())
  };
  return (
    <>
      il ya {value} secondes
      <p>{time.toISOString()}</p>
      <button
        onClick={() => {
          setValue((prevState) => {
            return prevState + step;
          });
        }}
      >
        click to ++
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        reset
      </button>
      <button onClick={onmout}>unmount</button>
      {/* <span>hello my name is essah meryem i'am 22 years old and i'am a full stack developer</span> */}
    </>
  );
}

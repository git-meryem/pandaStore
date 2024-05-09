// /* eslint-disable no-undef */
// /* eslint-disable react-hooks/rules-of-hooks */
// import { useState } from "react";
// import HelloWord from "../helloWord/HelloWord";

import { useRef, useState,useEffect } from "react";

// export default function form() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const handelChange = () => {
//     const name = document.querySelector("#name").value;
//     const age = document.querySelector("#age").value;
//     setName(name);
//     setAge(age);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     return console.log({name,age});
//   };

//   return (
//     <div >
//       <HelloWord></HelloWord>
//       <form>
//         {/* <div className="mb-3">
//           <label for="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div class="mb-3">
//           <label for="age" className="form-label">
//             Age
//           </label>
//           <input type="number" className="form-control" id="age" />
//         </div>

//         <button
//           type="submit"
//           value="Submit"
//           onClick={handleSubmit}
//           class="btn btn-primary"
//         >
//           Submit
//         </button> */}

//         <input type="text" id="name" onChange={handelChange} placeholder="name"></input>
//         <input type="number" id="age" onChange={handelChange} placeholder="age"></input>
//         <button type="submit" value='submit' onClick={handleSubmit}>submit</button>

//       </form>
//     </div>
//   );
// }

export default function Form() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [accept, setAccept] = useState(false);
  const [handelClick, setHandelClick] = useState({});


  

  const handelChange = (e) => {
    const type = e.currentTarget.type;
    const id = e.currentTarget.id;
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked

    // if (type === "checkbox") {
    //   console.log(e.currentTarget.checked);
    // }

    setHandelClick( (prevState)=>{
      return{
        ...prevState,...{[id]:(type === "checkbox" ? checked : value)} 
      }
    }
   )
    console.log(handelClick);
    // const name = document.querySelector('#name').value
    // setInputName(name)
    // console.log(name)
  };

  // const changeAge = ()=> {
  //   const age = document.querySelector('#age').value
  //   setInputAge(age)
  //   console.log(inputAge)
  // }

  // const changeAccept = ()=> {
  //   const accept = document.querySelector('#accept').checked
  //   setAccept(accept)
  //   console.log(accept)
  //}

  const nameRef = useRef()
  const ageRef = useRef()
  const acceptRef = useRef()


  const handelSubmit = (e)=> {
    e.preventDefault()
    const valuesObj = { name:nameRef.current.value,
                        age:ageRef.current.value,
                        accept:acceptRef.current.checked
                       } 
    setHandelClick(valuesObj)                   
    console.log(valuesObj)
    
    }

    useEffect(() => {
      
     nameRef.current.value = 'meryem'
     ageRef.current.value = 22
     acceptRef.current.checked = false
    }, []);

  return (
    <>
    {new Date().toLocaleTimeString()}
    {JSON.stringify(handelClick)}
      <form className="container mt-5">
        <div className="mb-3 col-6">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            // onChange={handelChange}
            ref={nameRef}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            // onChange={handelChange}
            ref={ageRef}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="accept"
            // onChange={handelChange}
            ref={acceptRef}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={ handelSubmit }>
          Submit
        </button>
      </form>
    </>
  );
}

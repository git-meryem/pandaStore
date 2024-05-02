import { useState } from "react";

export default function FruitList() {

  const [fruit,setFruit]=useState('')  
  const [fruiList,setFruitList]=useState([])
  const displayFruit = fruiList.map((fruit,key) => <li key={key} >{fruit}</li>);
 
  const fruitValue = ()=>{
    let value = document.querySelector('#fruit').value
    setFruit(value)
  }
  const fruitAdd = (e)=>{
    e.preventDefault()
    setFruitList([...fruiList,fruit])
    console.log([fruiList])
  }
  const onclickReset = ()=>{
    setFruitList([])
    document.querySelector('#fruit').value = ""
    
  }
  return (
    <>
      <span>
        <span>
           <input type="text" onChange={fruitValue}  id="fruit"/>
           <input type="submit" onClick={fruitAdd} value="Add Fruit"/>
           <input type="reset"  onClick={onclickReset} value="reset list"/>

        </span>
      </span>
      <h1>The fruit list : </h1>
      <ul>{displayFruit}</ul>
      {/* <ul>{displayFruit}</ul>       */}
    </>
  );
}

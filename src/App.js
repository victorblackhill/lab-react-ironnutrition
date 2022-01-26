import React , {useState}from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import myFoods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import AddFood from './AddFood/AddFood';
import TheList from "./TheList/TheList.jsx"


function App() {

  
  //"Classe foods"
  const [foods,setFoods] = useState(myFoods)
  const addFood = (food)=>{setFoods([...foods,food])}
  

  //button appear/disapear
  const [displayAdd,setDisplayAdd] = useState(false)
  const toggleDisplayAdd = () => {setDisplayAdd(!displayAdd)}

  //searchBar
  const [searchFood, setSearchFood] = useState(foods)
  const mySearch = (e)=>{
    setSearchFood( foods.filter( (food)=> e.target.value.toLowerCase() === food.name.toLowerCase().slice(0,e.target.value.length) ))
  }
  
  const [todaysFood,setTodaysFood]=useState(foods.slice(0,3))
  const addTodaysFood = (food)=>{
    setTodaysFood([...todaysFood,food])
  }


  return (
    <div className="App">
      <header className="App-header">  
        <button onClick={toggleDisplayAdd}>Add Food</button>  

        <> {displayAdd ? <AddFood addFood = {addFood} toggleDisplayAdd={toggleDisplayAdd} /> : <></> }</>
        <input placeholder="Search" onChange={mySearch}></input>

        <div className="deux-listes">
          <div>
            {searchFood.map((food,i)=> {return <FoodBox food={food} i={i} />} )}
          </div>

        
           <TheList todaysFood={todaysFood}/> 

        </div>
      

      </header>
    </div>
  );
}

export default App;

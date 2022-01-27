import React , {useState}from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import myFoods from './foods.json';
import AddFood from './AddFood/AddFood';
import TheList from "./TheList/TheList.jsx";
import Search from "./Search/Search.jsx";
import FoodList from './FoodList/FoodList';

function App() {
  
  
  //"Classe foods"
  const [foods,setFoods] = useState(myFoods)
  const addFood = (food)=>{setFoods([...foods,food])}
  const addQuant = (e)=>{
    const tableCopy = [...foods]
    const itemCopy = {...foods[e.target.getAttribute("listindex")],
                        quantity:Number(e.target.value)}
    tableCopy[e.target.getAttribute("listindex")] = itemCopy
    setFoods(tableCopy)
  }

  //button appear/disapear
  const [displayAdd,setDisplayAdd] = useState(false)
  const toggleDisplayAdd = () => {setDisplayAdd(!displayAdd)}

  //searchBar
  const [searchFood, setSearchFood] = useState("")
  const mySearch = (e)=>{
    setSearchFood(e.target.value)
  }

  //deuxième liste  
  const [todaysFood,setTodaysFood]=useState([])
  const addAMeal = (e)=>{
    setTodaysFood([...todaysFood,foods[e.target.getAttribute("listindex")]])
  }



  
  //main page does 3 things :
   // displays the foorm to add (or not by default)
   //displays the search component
   // displays both list components

  return (
    <div className="App App-header">
          
          <button onClick={toggleDisplayAdd}>Add Food</button>  
          <> {displayAdd ? <AddFood  addFood = {addFood} toggleDisplayAdd={toggleDisplayAdd} /> : <></> }</>
          
          
          <Search  mySearch={mySearch}/>
          
          <div className="deux-listes">
            <FoodList searchFood={searchFood} foods={foods} addQuant={addQuant} addAMeal={addAMeal} />
            <TheList todaysFood={todaysFood}/> 
          </div>
      
    </div>
  );
}

export default App;

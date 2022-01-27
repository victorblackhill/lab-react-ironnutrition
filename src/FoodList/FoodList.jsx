import React,{useState} from "react"
import FoodBox from "../FoodBox/FoodBox"

function FoodList({searchFood,foods,addQuant,addAMeal}) {

    
    return (<div>{foods.map((food,i)=> searchFood.toLowerCase() === food.name.toLowerCase().slice(0,searchFood.length)
                                        ? <FoodBox food= {food} i={i} addQuant={addQuant} addAMeal={addAMeal}/>
                                        :<></>
                                )}
        
       
                
                
            </div>)
    

}

export default FoodList

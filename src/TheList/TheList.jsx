import React,{useState} from "react"


function TheList({todaysFood}){

    
    const curr = {}
    todaysFood.forEach((food)=>{
          
                                    if(curr[food.name]){
                                        curr[food.name].number += food.quantity
                                        }
                                    else {
                                        curr[food.name] = {
                                            name:food.name,
                                            calories:food.calories,
                                            number:food.quantity
                                        }

                                        }
    })
    
    return (
        <div>
            <h2>Today's Food</h2>
            <ul>
                {Object.keys(curr).map((food,i) => <li key={i}> {curr[food].number} {curr[food].name} = {curr[food].calories * curr[food].number} calories</li> )}
            </ul>
            <span>Total = {Object.keys(curr).reduce((arr,food)=>Number(arr)+curr[food].calories * curr[food].number ,0)} </span>
        </div>
    )

}

export default TheList
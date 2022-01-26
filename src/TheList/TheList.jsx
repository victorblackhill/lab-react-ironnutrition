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
    
    console.log(curr)
    return (
        <div>
            <h2>Today's Food</h2>
            <ul>
                {Object.keys(curr).map((food,i) => <li key={i}> {curr[food].name} = {curr[food].calories} and {curr[food].number}</li> )}
            </ul>
            <span>Total = {todaysFood.reduce((arr,food)=>Number(arr)+food.calories,0)} </span>
        </div>
    )

}

export default TheList
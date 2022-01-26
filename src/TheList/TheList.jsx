import React,{useState} from "react"


function TheList({todaysFood}){

    const [arranged,setArranged] = useState({})
    const curr = {}
    todaysFood.forEach((food)=>{
            console.log(food.name,food.calories,curr)
        if(curr[food.name]){
            curr[food.name].number ++ }
        else {
                curr[food.name] = {}
                console.log(curr[food.name])
                curr[food.name].calories =Number(food.calories)
                console.log(">>>",curr[food.name])
                curr[food.name].number=Number(1)
                console.log(">>>",curr[food.name],curr)
                
                
        }
        curr[food.name] = curr[food.name] ? curr[food.name] +1 : 1
            
    })
    console.log(curr,Object.keys(curr),curr["Pizza"])
    return (
        <div>
            <h2>Today's Food</h2>
            <ul>
                {Object.keys(curr).map((food,i)=> <li key={i}> {food} = {food.calories}</li> )}
            </ul>
            <span>Total = {todaysFood.reduce((arr,food)=>Number(arr)+food.calories,0)} </span>
        </div>
    )

}

export default TheList
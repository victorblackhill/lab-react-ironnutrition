
import React,{useState} from 'react';
import "./AddFood.css"

function AddFood({addFood,toggleDisplayAdd}){

   const [name,setName] = useState("")
   const [calories,setCalories] = useState(0)
   const [image,setImage] = useState("https://i.imgur.com/eTmWoAN.png")
   const [quantity, setQuantity] = useState(0)

    const addHandler = (e)=>{
        
        e.preventDefault()

        addFood({
            name:name,
            calories:calories,
            image:image,
            quantity:quantity
        })
        
        setName("")
        setCalories(0)
        setImage("https://i.imgur.com/eTmWoAN.png")
        setQuantity(0)
        toggleDisplayAdd()
    }

    const aSet = (mySet)=>{
        return ( (evt)=> {mySet(evt.target.value)} )
    }

    return (<form onSubmit={addHandler} className = "food-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={aSet(setName)} name="name" />
                
                <label htmlFor="calories">Calories</label>
                <input type="number" id="calories" value={calories} name="calories" onChange={aSet(setCalories)}/>

                <label htmlFor ="image" >Image</label>
                <input type="text" id="image" value={image} name="image" onChange={aSet(setImage)} />
                
                <label>Quantity</label>
                <input type="number" id="quantity" value={quantity} name="quantity" onChange={aSet(setQuantity)} />

                <button>Submit</button>
            </form>
            )
}

export default AddFood
/*
{
    "name": "Salad",
    "calories": 150,
    "image": "https://i.imgur.com/DupGBz5.jpg",
    "quantity": 0
  },
  */
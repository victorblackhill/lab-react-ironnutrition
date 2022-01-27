import React from 'react';

function FoodBox({ food,i,addAMeal,addQuant }) {

  console.log(food)

  return (
    <div className="box" key={i}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image}/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" listindex={i} key={i} value={food.quantity} onChange = {addQuant} />
            </div>
            <div className="control">
              <button className="button is-info"  listindex={i} key={i} onClick={addAMeal}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

/*
  {
    "name": "Salad",
    "calories": 150,
    "image": "https://i.imgur.com/DupGBz5.jpg",
    "quantity": 0
  },
*/
export default FoodBox;

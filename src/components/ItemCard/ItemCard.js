import React from "react";

const ItemCard = ({ item,setExercise, exercise }) => {
  const { name, picture, age, time } = item;

  const addToList =()=>{
  const info ={
    time

  }
  if(exercise){
    const newTime =[...exercise, info]
    setExercise(newTime)
  }

  }
  return (
    <div className="m-8">
      <div className="card w-60 bg-base-100 drop-shadow-lg">
        <figure>
          <img
            className="w-52 h-24 rounded-xl mt-3"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title mx-auto">{name}</h2>
          <p className="text-center">For Age : {age}</p>
         <p className="text-center">Time required : {time}s</p>
          <button onClick={addToList} className="btn glass btn-primary">Add to list</button>
         
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

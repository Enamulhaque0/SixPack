import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";

const Items = ({ setExercise, exercise }) => {
  console.log(exercise);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items?.map((item) => (
        <ItemCard
          item={item}
          key={item._id}
          exercise={exercise}
          setExercise={setExercise}
        ></ItemCard>
      ))}
    </div>
  );
};

export default Items;

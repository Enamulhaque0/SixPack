import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";

const Items = ({ setExercise, exercise }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-10">
        {items?.map((item) => (
          <ItemCard
            item={item}
            key={item._id}
            exercise={exercise}
            setExercise={setExercise}
          ></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Items;

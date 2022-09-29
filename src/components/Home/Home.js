import { useState } from "react";
import Items from "../Items/Items";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";

const Home = () => {
  const [exercise, setExercise] = useState([]);
  const [breakTime, setBreak] = useState(0);

  const handleTen = (e) => {
    setBreak(e.target.value);
  };

  const handleTwenty = (e) => {
    setBreak(e.target.value);
  };

  const handleThirty = (e) => {
    setBreak(e.target.value);
  };

  const handleForty = (e) => {
    setBreak(e.target.value);
  };

  const sum = exercise.reduce((accumulator, object) => {
    return accumulator + object.time;
  }, 0);

  const tost = () => {
    Swal.fire("Good job!", "Activity Completed!", "success");
  };

  // console.log(exercise);
  return (
    <div className="mt-6">
      <div className="flex justify-center items-center flex-wrap md:flex-wrap ms-8">
        <div>
          <h1 className="text-3xl mx-11">Select today’s exercise</h1>

          <Items exercise={exercise} setExercise={setExercise}></Items>
        </div>

        <div className=" w-30 text-center">
          <div>
            <div>
              <div className="card w-full h-full bg-base-100 shadow-xl">
                <div className="avatar  flex justify-around">
                  <div className="w-24 h-24 rounded ">
                    <img src="https://i.ibb.co/BNBtsbh/D2-A1-C270-46-E4-4788-9630-11-D6-A5-CE08-B2.jpg" />
                  </div>
                  <div>
                    <h1>Mohammad Enamul haque</h1>
                    <p className="flex items-center gap-2 ">
                      {" "}
                      <Icon icon="ci:location" /> Dhaka , Bangladesh
                    </p>
                  </div>
                </div>
                <div className="card-body items-center text-center">
                  <div className="flex justify-around  bg-info rounded-lg text-white ">
                    <h1 className=" px-7 py-3 mx-2">66KG</h1>
                    <h1 className=" px-7 py-3">5.8"</h1>
                    <h1 className=" px-7 py-3">23yrs</h1>
                  </div>
                  <h1 className="text-1xl">Add A Break</h1>
                  <div className="flex justify-around gap-3 ">
                    <button
                      onClick={handleTen}
                      value="10"
                      className="btn btn-xs"
                    >
                      10s
                    </button>
                    <button
                      onClick={handleTwenty}
                      value="20"
                      className="btn btn-xs"
                    >
                      20s
                    </button>
                    <button
                      onClick={handleThirty}
                      value="30"
                      className="btn btn-xs"
                    >
                      30s
                    </button>
                    <button
                      onClick={handleForty}
                      value="40"
                      className="btn btn-xs"
                    >
                      40s
                    </button>
                  </div>
                  <h1 className="mt-8 text-1xl">Exercise Details</h1>
                  <h1 className="mt-4 bg-slate-600 p-3 rounded text-white">
                    Exercise time: {sum} seconds
                  </h1>
                  <h1 className="mt-1 rounded bg-slate-600 p-3 text-white">
                    Break time : {breakTime} seconds
                  </h1>
                  <div className="card-actions">
                    <button onClick={tost} className="btn btn-wide mt-7">
                      Activity Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

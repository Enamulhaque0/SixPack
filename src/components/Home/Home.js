import { useState } from "react";
import Items from "../Items/Items";
import Swal from 'sweetalert2'

const Home = () => {
 const [exercise,setExercise] =useState([])
 
const sum = exercise.reduce((accumulator, object) => {
  return accumulator + object.time;
}, 0);

const tost=()=>{
  Swal.fire(
    'Good job!',
    'Activity Completed!',
    'success'
  )
}

// console.log(exercise);
  return (
    <div className="mt-6">
      <div className="flex  ms-12">
        <div className=" text-center">
          <h1 className="text-3xl">Select today’s exercise</h1>

          <Items exercise={exercise} setExercise={setExercise} ></Items>
        </div>

        <div className=" w-30 text-center">
          <div>
            <div>
              <div className="card w-full h-full bg-base-100 shadow-xl">
                <div className="avatar m-8 flex justify-around">
                  <div className="w-24 rounded ">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                  <div>
                    <h1>Enamul haque</h1>
                    <p>Dhaka , Bangladesh</p>
                  </div>
                </div>
                <div className="card-body items-center text-center">
                  <div className="flex justify-around  bg-info rounded-lg text-white">
                    <h1 className=" p-3 mx-2">64KG</h1>
                    <h1 className=" p-3">5.8"</h1>
                    <h1 className=" p-3">25yrs</h1>
                  </div>
                  <h1 className="text-1xl">Add A Break</h1>
                  <div className="flex justify-around gap-3 ">
                    <button className="btn btn-xs">10s</button>
                    <button className="btn btn-xs">20s</button>
                    <button className="btn btn-xs">30s</button>
                    <button className="btn btn-xs">40s</button>
                  </div>
                  <h1 className="mt-8 text-1xl">Exercise Details</h1>
                  <h1 className="mt-7 bg-slate-600 p-3 text-white">
                    Exercise time: {sum} seconds
                  </h1>
                  <h1 className="mt-7 bg-slate-600 p-3 text-white">
                    Break time : 15 seconds
                  </h1>
                  <div className="card-actions">
                    <button onClick={tost} className="btn btn-wide mt-7" >Activity Completed</button>
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

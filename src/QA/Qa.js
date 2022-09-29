import React from "react";

const Qa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-24 mt-12 ">
      <div className="mx-auto">
        React Work
        <div className="dropdown dropdown-end ">
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
          >
            <div className="card-body">
              <h2 className="card-title "></h2>
              <p>
                A React app usually has a single root DOM node. Rendering an
                element into the DOM will change the user interface of the page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
         state and props?
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="card compact dropdown-content shadow bg-base-100 rounded-box w-60"
          >
            <div className="card-body">
              <h2 className="card-title "></h2>
              <p >
                Props are used to pass data from one component <br /> to another. The
                state is a local data storage that is local <br /> to the component
                only and cannot be passed to other components.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
      useEffect used for?
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-circle btn-ghost btn-xs text-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
          >
            <div className="card-body">
              <h2 className="">useEffect() — the hook that manages side-effects in functional React components.</h2>
              <p> 
                1. useEffect() is for side-effects <br />
                2. Dependencies argument 3. Component lifecycle
                3. Side-effect cleanup 4.Fetching data 5.Conclusion and etc...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qa;

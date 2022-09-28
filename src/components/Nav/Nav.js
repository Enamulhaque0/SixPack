import React from "react";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-300 p-5  ">
        <a className="btn btn-ghost normal-case text-4xl	">
          {" "}
          <Icon
            icon="healthicons:gym"
            width="50"
            hFlip={true}
            vFlip={true}
          />{" "}
          Six Pack Fitness
        </a>
      </div>
    </div>
  );
};

export default Nav;

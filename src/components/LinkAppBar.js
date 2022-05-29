import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const LinkAppBar = ({ list }) => {
  const { id, name } = list;

  return (
    <NavLink className='links'
      style={{ fontSize: "30px", margin: "10px" }}
      to={`/category/${id}`}
    >
      {name}
    </NavLink>
  );
};

export default LinkAppBar;

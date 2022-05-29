import { AppBar, Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getApiCategories } from "../app/categoriesSlice";
import LinkAppBar from "./LinkAppBar";
import Button from "@mui/material/Button";
import { removeUser } from "app/userSlice";

const Header = () => {
  const location = useLocation();
  const locName = +location.state;
  const { email } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getApiCategories());
  }, []);

  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (locName) {
      setCategoryName(categories.find((c) => locName === c.id).name);
    }
  }, []);

  const dispatch = useDispatch();
  const categoryState = useSelector((state) => state.categories);
  const { categories } = categoryState;

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <AppBar position="static" >
        <Container sx={{ display: "flex", justifyContent: "space-between",  flexWrap: 'wrap'}}>
          {categories.map((list) => (
            <LinkAppBar key={list.id} list={list} />
          ))}
        </Container>
      </AppBar>
      {categoryName ? categoryName : null}
      <Button onClick={handleLogOut} variant="outlined">
        Log Out {email}
      </Button>
    </>
  );
};

export default Header;

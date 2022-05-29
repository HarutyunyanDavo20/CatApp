import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "app/userSlice";
import { useState } from "react";
import { Snackbar } from "@mui/material";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();

  const [alertMsg, setAlertMsg] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const push = () => {
    navigate("/login");
  };

  const showError = () => {
    setAlertMsg({ ...alertMsg, open: true });
    setTimeout(() => {
      setAlertMsg({ ...alertMsg, open: false });
    }, 2000);
  };

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push();
      })
      .catch(showError);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: alertMsg.vertical,
          horizontal: alertMsg.horizontal,
        }}
        open={alertMsg.open}
        message="Incorrect login and password"
        key={alertMsg.vertical + alertMsg.horizontal}
      />

      <Form title="register" handleClick={handleRegister} />
    </>
  );
};

export default SignUp;

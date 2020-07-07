import React from "react";

const Logout = (props) => {
  localStorage.removeItem("user");
  props.history.push("/");
  return null;
};

export default Logout;

import React from "react";

const HeaderComponent = () => {
  let todayDate = new Date();
  let day = String(todayDate.getDate()).padStart(2, "0");
  let month = String(todayDate.getMonth() + 1).padStart(2, "0");
  let year = todayDate.getFullYear();
  todayDate = month + "/" + day + "/" + year;
  return (
    <header className="header">
      <h1>Currency Exchange</h1>
      <p>{todayDate}</p>
    </header>
  );
};
export default HeaderComponent;

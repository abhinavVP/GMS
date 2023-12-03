import React from "react";
import Card from "./Card.jsx";
import "./Aboutus.css";
function AboutUs() {
  return (
    <div className="Aboutus">
      <h2 className="heading"> The Team </h2>
      <div className="cardcontainer">
        <Card className="card" name="Abhinav V" img={require("./boy.png")} />
        <Card className="card" name="Akash G Gaonkar" img={require("./boy.png")} />
        <Card className="card" name="Abishek K" img={require("./boy.png")} />
      </div>
    </div>
  );
}

export default AboutUs;

import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Interface2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/interface4");
  };

  return (
    <div className="maindiv">
      <Header />
      <div className="maindiv1">
        <div className="maindiv2">
          <div>
            <div className="maindiv4">
              <div className="maindiv6">
                <p className="font2">NAME</p>
                <input className="input1"></input>
              </div>
              <div className="maindiv6">
                <p className="font2">AGE</p>
                <input className="input1"></input>
              </div>
              <div className="maindiv6">
                <p className="font2">WEIGTH</p>
                <input className="input1"></input>
              </div>
            </div>
            <div className="maindiv5">
              <button className="button1" onClick={handleClick}>
                START
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface2;

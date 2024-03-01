import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { projectFirestore } from "../components/firebase-config";
import { ref, onValue, push, set } from "firebase/database";

function Interface3() {
  const navigate = useNavigate();
  const SportRef = ref(projectFirestore, "sensor/Sport");
  const [name, setName] = useState();
  const [sport, setSport] = useState();
  const [position, setPosition] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [weight, setWeight] = useState();
  const handleClick = async (e) => {
    e.preventDefault();
    if (!name || !sport || !position || !age || !gender || !weight) {
      alert("Please fill in all the fields.");
      return;
    }
    try {
      // Add a new sport to the Firestore collection
      const newSportRef = push(SportRef, {
        Name: name,
        Sport: sport,
        Position: position,
        Age: age,
        Gender: gender,
        Weight: weight,
      });
      const snapshot = await newSportRef; // Wait for the promise to resolve
      const newSportKey = snapshot.key; // Get the unique ID (key) generated by Firebase
      console.log(newSportKey);
      await set(ref(projectFirestore, `sensor/startStop`), {
        value: 1,
        sportId: newSportKey,
      });

      // Optionally, you can clear the form after submitting
      alert("Sport Mode Started Successfully!"); // Set the success message
      navigate("/interface4", {
        state: {
          sportId: newSportKey,
        },
      });

      // Optionally, you can clear the success message after a few seconds

      // Optionally, you can navigate to a different page or show a success message
    } catch (error) {
      // Handle the error (you can show an error message to the user)
      console.error("Error Starting data collection:", error.message);
    }
  };

  return (
    <div className="maindiv">
      <Header />
      <div className="maindiv1">
        <div className="maindiv2">
          <div>
            <div className="maindiv7">
              <div className="maindiv6">
                <p className="font2">NAME</p>
                <input
                  className="input1"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log("Name:", name);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">SPORT</p>
                <input
                  className="input1"
                  type="text"
                  id="name"
                  name="name"
                  value={sport}
                  onChange={(e) => {
                    setSport(e.target.value);
                    console.log("sport:", sport);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">POSITION</p>
                <input
                  className="input1"
                  type="text"
                  id="name"
                  name="name"
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                    console.log("position:", position);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">AGE</p>
                <input
                  className="input1"
                  type="text"
                  id="name"
                  name="name"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    console.log("age:", age);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">WEIGHT</p>
                <input
                  className="input1"
                  type="text"
                  id="name"
                  name="name"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    console.log("weight:", weight);
                  }}
                ></input>
              </div>
              <div className="maindiv6">
                <p className="font2">GENDER</p>
                <input
                  className="input1"
                  type="text"
                  id="name"
                  name="name"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                    console.log("Gender:", gender);
                  }}
                ></input>
              </div>
            </div>
            <div className="maindiv8">
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

export default Interface3;
import React, { useState, useEffect } from "react";
import "./index.css";
import SliderComp from "../pagination";

export const strengthMapping = {
    0:"Weak",
    1:"Weak",
    2:"Moderate",
    3:"Moderate",
    4:"Strong",
}

//TODO:Length selection 
//TODO:Copy Component

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [characterSet, setCharacterSet] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    setDisabled(
     !(uppercase ||
     lowercase ||
     numbers ||
     specialChar)
    );
  },[uppercase, lowercase, numbers, specialChar])

  useEffect(()=>{
    calculateStrength();
  },[password])

  const handleChange = (e) => {
    //TODO: Extract name and checked from event props
    const { name, checked } = e.target;
    switch (name) {
      case "uppercase":
        if(checked){
            setCharacterSet(characterSet => characterSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }else{
            setCharacterSet(characterSet.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ",""));
        }
        setUppercase(checked);
        break;
      case "lowercase":
        if(checked){
            setCharacterSet(characterSet => characterSet + "abcdefghijklmnopqrstuvwxyz");
        }else{
            setCharacterSet(characterSet.replace("abcdefghijklmnopqrstuvwxyz",""));
        }
        setLowercase(checked);
        break;
      case "numbers":
        if(checked){
            setCharacterSet(characterSet => characterSet + "0123456789");
        } else{
            setCharacterSet(characterSet.replace("0123456789",""));
        }
        setNumbers(checked);
        break;
      case "specialchar":
        if(checked){
            setCharacterSet(characterSet => characterSet + "+_-/,.?=%#$%():;<>");
        } else{
            setCharacterSet(characterSet.replace("+_-/,.?=%#$%():;<>",""));
        }
        setSpecialChar(checked);
        break;
      default:
        break;
    }
  };

  const generatePassword = () => {
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      result += characterSet[randomIndex];
    }
    setPassword(result);
  };

  const calculateStrength = () => {
    let score = 0;
    const lowercaseRegex = /[a-z]/g;
    const uppercaseRegex = /[A-Z]/g;
    const numberRegex = /[0-9]/g;
    const specialCharRegex = /[^a-zA-Z0-9]/g;
    if(lowercaseRegex.test(password)){
        score += 1;
    }
    if(uppercaseRegex.test(password)){
        score += 1;
    }
    if(numberRegex.test(password)){
        score += 1;
    }
    if(specialCharRegex.test(password)){
        score += 1;
    }

    setStrength(strengthMapping[score]);
  }

  return (
    <div className="password-generator-wrapper">
      <div className="generated-password-row">
        <span>{password}</span>
        <button>Copy</button>
      </div>
      <SliderComp/>
      {/* TODO:Implement slider */}
      <div>Slider for password length</div>
      <div className="password-attributes">
        <div className="row">
          <span className="attribute">
            <input
              type="checkbox"
              name="uppercase"
              checked={uppercase}
              onChange={(e) => handleChange(e)}
            />{" "}
            Include uppercase letters
          </span>
          <span className="attribute">
            <input
              type="checkbox"
              name="lowercase"
              checked={lowercase}
              onChange={(e) => handleChange(e)}
            />{" "}
            Include lowercase letters
          </span>
        </div>
        <div className="row">
          <span className="attribute">
            <input
              type="checkbox"
              name="numbers"
              checked={numbers}
              onChange={(e) => handleChange(e)}
            />{" "}
            Include numbers
          </span>
          <span className="attribute">
            <input
              type="checkbox"
              name="specialchar"
              checked={specialChar}
              onChange={(e) => handleChange(e)}
            />{" "}
            Include special characters
          </span>
        </div>
      </div>
      <div className="password-strength">
        <span>Strength</span>
        <span>{strength}</span>
      </div>
      <button onClick={generatePassword} disabled={disabled}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;

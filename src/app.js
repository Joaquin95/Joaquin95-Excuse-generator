/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".btn").addEventListener("click", function() {
    generateworkexcuse();
  });
};

const generateworkexcuse = () => {
  let who = ["My dog", "The Police", "The psychic said", "Aliens", "My kids"];
  let action = [
    "hide and seek",
    "abducted",
    "damaged",
    "ate",
    "stole",
    "playing"
  ];
  let what = [
    "dont leave the house",
    "my car keys",
    "my arm",
    "got locked in the closet"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);

  console.log(who[whoindex], action[actionindex], what[whatindex]);

  let excuse =
    who[whoindex] + " " + " " + action[actionindex] + " " + what[whatindex];
  document.querySelector(".excuse").innerHTML = excuse;
};

"use strict";

const getValueOne = function () {
  if (document.querySelector(".one").textContent === "1") {
    document.querySelector(".display").textContent = "1";
  } else {
    document.querySelector(".display").textContent = "";
  }
};

const getValueTwo = function () {
  if (document.querySelector(".two").textContent === "2") {
    document.querySelector(".display").textContent = "2";
  } else {
    document.querySelector(".display").textContent = "";
  }
};

const getValueThree = function () {
  if (document.querySelector(".three").textContent === "3") {
    document.querySelector(".display").textContent = "3";
  } else {
    document.querySelector(".display").textContent = "";
  }
};

const getValueFour = function () {
  if (document.querySelector(".four").textContent === "4") {
    document.querySelector(".display").textContent = "4";
  } else {
    document.querySelector(".display").textContent = "";
  }
};

document.querySelector(".one").addEventListener("click", getValueOne);
document.querySelector(".two").addEventListener("click", getValueTwo);
document.querySelector(".three").addEventListener("click", getValueThree);
document.querySelector(".four").addEventListener("click", getValueFour);

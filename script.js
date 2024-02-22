"use strict";

const getValueOne = function () {
  if (document.querySelector(".one").textContent === "1") {
    document.querySelector(".display").textContent += "1";
  }
};

const getValueTwo = function () {
  if (document.querySelector(".two").textContent === "2") {
    document.querySelector(".display").textContent += "2";
  }
};

const getValueThree = function () {
  if (document.querySelector(".three").textContent === "3") {
    document.querySelector(".display").textContent += "3";
  }
};

const getValueFour = function () {
  if (document.querySelector(".four").textContent === "4") {
    document.querySelector(".display").textContent += "4";
  }
};

const getValueFive = function () {
  if (document.querySelector(".five").textContent === "5") {
    document.querySelector(".display").textContent += "5";
  }
};

const getValueSix = function () {
  if (document.querySelector(".six").textContent === "6") {
    document.querySelector(".display").textContent += "6";
  }
};

const getValueSeven = function () {
  if (document.querySelector(".seven").textContent === "7") {
    document.querySelector(".display").textContent += "7";
  }
};

const getValueEight = function () {
  if (document.querySelector(".eight").textContent === "8") {
    document.querySelector(".display").textContent += "8";
  }
};

const getValueNine = function () {
  if (document.querySelector(".nine").textContent === "9") {
    document.querySelector(".display").textContent += "9";
  }
};

const getValuePlus = function () {
  if (document.querySelector(".plus").textContent === "+") {
    document.querySelector(".display").textContent += "+";
  }
};

const getValueMinus = function () {
  if (document.querySelector(".minus").textContent === "-") {
    document.querySelector(".display").textContent += "-";
  }
};

const getValueStar = function () {
  if (document.querySelector(".star").textContent === "*") {
    document.querySelector(".display").textContent += "*";
  }
};

const getValueDivide = function () {
  if (document.querySelector(".divide").textContent === "/") {
    document.querySelector(".display").textContent += "/";
  }
};

const getValueZero = function () {
  if (document.querySelector(".zero").textContent === "0") {
    document.querySelector(".display").textContent += "0";
  }
};

const getValueZeros = function () {
  if (document.querySelector(".Zeros").textContent === "00") {
    document.querySelector(".display").textContent += "00";
  }
};

const getValueEquals = function () {
  if (document.querySelector(".equals").textContent === "=") {
    document.querySelector(".display").textContent = eval(
      document.querySelector(".display").textContent
    );
  }
};

const getValueClear = function () {
  if (document.querySelector(".clear").textContent === "AC") {
    document.querySelector(".display").textContent = "";
  }
};

const getValueDelete = function () {
  if (document.querySelector(".delete").textContent === "DE") {
    document.querySelector(".display").textContent = document
      .querySelector(".display")
      .textContent.toString()
      .slice(0, -1);
  }
};
const getValuePoint = function () {
  if (document.querySelector(".point").textContent === ".") {
    document.querySelector(".display").textContent += ".";
  }
};

const getValuePercent = function () {
  if (document.querySelector(".percent").textContent === "%") {
    document.querySelector(".display").textContent += "%";
  }
};

document.querySelector(".one").addEventListener("click", getValueOne);
document.querySelector(".two").addEventListener("click", getValueTwo);
document.querySelector(".three").addEventListener("click", getValueThree);
document.querySelector(".four").addEventListener("click", getValueFour);
document.querySelector(".five").addEventListener("click", getValueFive);
document.querySelector(".six").addEventListener("click", getValueSix);
document.querySelector(".seven").addEventListener("click", getValueSeven);
document.querySelector(".eight").addEventListener("click", getValueEight);
document.querySelector(".nine").addEventListener("click", getValueNine);
document.querySelector(".plus").addEventListener("click", getValuePlus);
document.querySelector(".minus").addEventListener("click", getValueMinus);
document.querySelector(".star").addEventListener("click", getValueStar);
document.querySelector(".divide").addEventListener("click", getValueDivide);
document.querySelector(".zeros").addEventListener("click", getValueZeros);
document.querySelector(".zero").addEventListener("click", getValueZero);
document.querySelector(".equals").addEventListener("click", getValueEquals);
document.querySelector(".clear").addEventListener("click", getValueClear);
document.querySelector(".delete").addEventListener("click", getValueDelete);
document.querySelector(".percent").addEventListener("click", getValuePercent);
document.querySelector(".point").addEventListener("click", getValuePoint);

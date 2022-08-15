//Html Objects
var moneyBtn = document.getElementById("moneyBtn");
var moneyRequestField = document.getElementById("moneyRequestField");
var moneyInfoLabel = document.getElementById("moneyInfoLabel");
var moneyRequestValue = document.getElementById("moneyRequestValue");
//Event Listeners
moneyBtn.addEventListener("mousedown", incrementMoney);
moneyRequestField.addEventListener("change", requestChanged);
//Global Variables
var money = 0.0;
var moneyRequest = 0.0;
//Functions
function incrementMoney() {
  if ((moneyRequestField.value = "")) {
    money++;
  } else {
    money += moneyRequest;
    if (money < 0) money = 0;
  }

  updateLabel();
}

function updateLabel(amount) {
  moneyInfoLabel.innerText = "Money: " + money.toString() + ",00$";
}

function requestChanged() {
  console.log(moneyRequestField.value);
  moneyRequest = parseInt(moneyRequestField.value);
  moneyRequestField.value = moneyRequest.toString();
  if (moneyRequestField.value == "NaN") {
    moneyRequestField.value = "";
    moneyRequest = 0;
  }
  incrementMoney();
}

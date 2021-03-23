// Pay Calculator

const displayMessage = (message, colour) => {
  const messageBox = document.querySelector(".pay-calc-message");
  messageBox.innerHTML += `<p>${message}</p>`;
  messageBox.style.background = `${colour}`;
  setTimeout(() => {
    messageBox.style.background = null;
    messageBox.innerHTML = null;
  }, 5000);
};

const displayWages = (hourlyWage, weeklyWage, monthlyWage, annualWage) => {
  displayMessage("We have successfully calculated your wage", "green");
  document.querySelector(".wage-details").innerHTML = `
  <h3>Hourly Wage: £${parseFloat(hourlyWage).toFixed(2)}</h3>
  <h3>Weekly Wage: £${parseFloat(weeklyWage).toFixed(2)}</h3>
  <h3>Monthly Wage: £${parseFloat(monthlyWage).toFixed(2)}</h3>
  <h3>Annual Wage: £${parseFloat(annualWage).toFixed(2)}</h3>`;
};

const calculatePay = (e) => {
  e.preventDefault();

  let wage = parseFloat(document.getElementById("wage").value);
  let timeframe = document.getElementById("timeframe").value;
  let hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

  if (!wage || typeof wage !== "number") {
    displayMessage(
      "Please enter a wage and ensure it is a numerical value",
      "red"
    );
    return;
  }

  if (!timeframe) {
    displayMessage("Please select a timeframe for your wage", "red");
    return;
  }

  if (!hoursWorked || typeof hoursWorked !== "number") {
    displayMessage(
      "Please enter work hours and ensure it is a numerical value",
      "red"
    );
    return;
  }

  let hourlyWage, weeklyWage, monthlyWage, annualWage;

  switch (timeframe) {
    case "hourly":
      hourlyWage = wage;
      weeklyWage = wage * hoursWorked;
      monthlyWage = (wage * hoursWorked * 52) / 12;
      annualWage = wage * hoursWorked * 52;
      displayWages(hourlyWage, weeklyWage, monthlyWage, annualWage);
      break;
    case "weekly":
      hourlyWage = wage / hoursWorked;
      weeklyWage = wage;
      monthlyWage = (wage * 52) / 12;
      annualWage = wage * 52;
      displayWages(hourlyWage, weeklyWage, monthlyWage, annualWage);
      break;
    case "monthly":
      hourlyWage = (wage * 12) / 52 / hoursWorked;
      weeklyWage = (wage * 12) / 52;
      monthlyWage = wage;
      annualWage = wage * 12;
      displayWages(hourlyWage, weeklyWage, monthlyWage, annualWage);
      break;
    case "annually":
      hourlyWage = wage / 52 / hoursWorked;
      weeklyWage = wage / 52;
      monthlyWage = wage / 12;
      annualWage = wage;
      displayWages(hourlyWage, weeklyWage, monthlyWage, annualWage);
      break;
    default:
      alert("An error occured. Please try again later");
  }
};

document
  .getElementById("pay-calculator-form")
  .addEventListener("submit", calculatePay);

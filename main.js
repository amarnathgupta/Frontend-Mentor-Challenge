let inputDay, inputMonth, inputYear;

document.querySelector("#date").addEventListener("input", checkDay);
document.querySelector("#month").addEventListener("input", checkMonth);
document.querySelector("#year").addEventListener("input", checkYear);

function handleClick() {
  calculateAge(inputDay, inputMonth, inputYear);
}

function checkDay(end = 31) {
  inputDay = parseInt(document.querySelector("#date").value, 10);
  let input = document.querySelector(".input .date input");
  let label = document.querySelector(".input .date label");
  let error = document.querySelector(".input .date .error-message");

  if (inputDay < 1 || inputDay > end) {
    input.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
    label.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
    error.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
  } else {
    input.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Off-black");
    label.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Smokey-grey");
    error.style.color = "transparent";
  }
}
function checkMonth() {
  inputMonth = parseInt(document.querySelector("#month").value, 10);
  let input = document.querySelector(".input .month input");
  let label = document.querySelector(".input .month label");
  let error = document.querySelector(".input .month .error-message");
  inputYear = parseInt(document.querySelector("#year").value, 10);

  switch (inputMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      checkDay(31);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      checkDay(30);
      break;
    case 2:
      {
        let now = inputYear == "" ? new Date().getFullYear() : inputYear;
        if ((now % 4 === 0 && now % 100 !== 0) || now % 400 === 0) {
          checkDay(29);
        } else {
          checkDay(28);
        }
      }
      break;
  }

  if (inputMonth < 1 || inputMonth > 12) {
    input.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
    label.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
    error.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
  } else {
    input.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Off-black");
    label.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Smokey-grey");
    error.style.color = "transparent";
  }
}
function checkYear() {
  inputYear = parseInt(document.querySelector("#year").value, 10);
  let input = document.querySelector(".input .year input");
  let label = document.querySelector(".input .year label");
  let error = document.querySelector(".input .year .error-message");
  let currentYear = new Date().getFullYear();

  if (inputYear > currentYear) {
    input.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
    label.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
    error.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Light-red");
  } else {
    input.style.borderColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Off-black");
    label.style.color = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--Smokey-grey");
    error.style.color = "transparent";
  }
}

function calculateAge(inputDay, inputMonth, inputYear) {
  let current = new Date();
  let ageDate = new Date(inputYear, inputMonth, inputDay);

  let ageMilli = current - ageDate;

  let age = new Date(ageMilli);

  let displayDay = age.getUTCDate() + 1;
  let displayMonth = age.getUTCMonth() + 1;
  let displayYear = age.getUTCFullYear() - 1970;
  document.querySelector(".day-value .value").innerHTML = displayDay;
  document.querySelector(".month-value .value").innerHTML = displayMonth;
  document.querySelector(".year-value .value").innerHTML = displayYear;
}

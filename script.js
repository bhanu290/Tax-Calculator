const form = document.getElementById("taxForm");
const modal = document.getElementById("modal");
const resultElement = document.getElementById("result");
const totalIncomeElement = document.getElementById("totalIncome");
function hideMessage(iconElement) {
  iconElement.style.display = "none";
}

function showMessage(message, icon) {
  const iconPosition = icon.getBoundingClientRect();
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.classList.add("message-box");
  messageElement.style.top = iconPosition.top + 10 + "px";
  messageElement.style.left = iconPosition.left + 20 + "px";
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}



form.addEventListener("submit", function (event) {
  event.preventDefault();
  const annualIncomeInput = form.elements["annualIncome"].value;
  const annualIncome = isNaN(annualIncomeInput)
    ? NaN
    : parseInt(annualIncomeInput);

  const extraIncomeInput = form.elements["extraIncome"].value;
  const extraIncome = isNaN(extraIncomeInput)
    ? NaN
    : parseInt(extraIncomeInput);

  const deductionsInput = form.elements["deductions"].value;
  const deductions = isNaN(deductionsInput) ? NaN : parseInt(deductionsInput);

  console.log(annualIncome);
  console.log(extraIncome);
  console.log(deductions);

  if (isNaN(annualIncome)) {
    showMessage(
      "Please enter numbers only!",
      document.getElementById("incomeError")
    );
  } else {
    hideMessage(document.getElementById("incomeError"));
  }

  if (isNaN(extraIncome)) {
    showMessage(
      "Please enter numbers only!",
      document.getElementById("extraIncomeError")
    );
  } else {
    hideMessage(document.getElementById("extraIncomeError"));
  }

  if (isNaN(deductions)) {
    showMessage(
      "Please enter numbers only!",
      document.getElementById("deductionsError")
    );
  } else {
    hideMessage(document.getElementById("deductionsError"));
  }

  if (isNaN(annualIncome) || isNaN(extraIncome) || isNaN(deductions)) {
    return;
  }

  const ageGroup = form.elements["ageGroup"].value;

  let tax = 0;
  const totalIncome = annualIncome + extraIncome - deductions;

  if (totalIncome > 800000) {
    const taxableAmount = totalIncome - 800000;
    switch (ageGroup) {
      case "<40":
        tax = 0.3 * taxableAmount;
        break;
      case ">=40 & <60":
        tax = 0.4 * taxableAmount;
        break;
      case ">=60":
        tax = 0.1 * taxableAmount;
        break;
    }
  }

  const incomeAfterDeductions = totalIncome - tax;

  resultElement.textContent = `Tax to be paid: ₹${tax.toFixed(2)}`;
  totalIncomeElement.textContent = `Income after Deductions: ₹${incomeAfterDeductions.toFixed(
    2
  )}`;
  modal.style.display = "block";
});

function resetForm() {
  const form = document.getElementById("taxForm");
  form.reset();
}

function closeModal() {
  modal.style.display = "none";
  resetForm();
}

const inputs = document.querySelectorAll('input[type="input"]');

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    const errorIcon = input.nextElementSibling;
    if (isNaN(this.value.trim())) {
      errorIcon.style.display = "inline-block";
      errorIcon.setAttribute("title", errorIcon.getAttribute("title"));
      showMessage("Please enter numbers only!", errorIcon);
    } else {
      errorIcon.style.display = "none";
    }
  });
});

const ageDropdown = document.getElementById("ageGroup");
ageDropdown.addEventListener("change", function () {
  const errorIcon = this.nextElementSibling;
  if (this.value.trim() === "") {
    errorIcon.style.display = "inline-block";
  } else {
    errorIcon.style.display = "none";
  }
});

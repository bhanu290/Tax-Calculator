# Tax Calculator App  

check the live link [here](https://bhanu290.github.io/Tax-Calculator/)

## Overview

This tax calculator app helps users calculate their tax based on their income and age. It follows specific rules and requirements as outlined below.

### References & Requirements

- **Tax Calculation Formula**:
  - Income under 8 Lakhs is not taxed.
  - Income over 8 Lakhs is taxed based on age:
    - 30% for age < 40
    - 40% for age ≥ 40 but < 60
    - 10% for age ≥ 60

- **Error Handling**:
  - Users can enter incorrect values (e.g., characters in number fields), but errors are highlighted with an error icon next to the input field.
  - The age dropdown field must be selected, and if not, an error icon is displayed.
  - Error icons are not visible by default but appear when errors are present.

- **Modal Display**:
  - Upon submitting the form, a modal displays the final tax calculation based on the entered values.

- **Validation**:
  - All fields are required to fill.
  - Non-integer values are not allowed in any field. If entered, a warning message appears for 3 seconds.

## Usage

1. **Entering Income**:
   - Users enter their gross annual income, extra income, applicable deductions, and age group in the form.

2. **Error Handling**:
   - Error icons appear next to input fields with incorrect values.
   - If age is not selected or non-integer values are entered, warning messages are displayed.

3. **Submit**:
   - Clicking the "Submit" button triggers the tax calculation.

4. **Modal Display**:
   - After submission, a modal shows the calculated tax amount based on the entered data.

## Example Tax Calculation

- Age: <40
- Gross Annual Income: 40 Lakhs
- Deductions: None
- Tax Calculation: 30% of (40 - 8) Lakhs = 9.6 Lakhs

## App Demonstration
- Below are some of the screenshots of the app, The first two screenshots demonstrate that if the total_income (gross_annual_income + extra_income - deductions) <= 8 Lakhs then the tax is 0.
- The 3rd and 4th screeshots show that if the total_income > 8 Lakhs then there is some tax calculated according to their age group.
- The 5th screenshot show the description of each field with the help of a question mark icon beside it.
- The 6th screenshot show that when the user enters non-integer values in any of the income fields then the warning is popped.
- The 7th screenshot show that if the user ignores any warning and try to submit, then the user cannot submit and the warning pops in the respective field again.

<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/17b48833-7099-494d-bf9e-9340282f3c16" alt="Screenshot" width="500px">
<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/01c47776-7386-4f02-af1c-876075bf0701" alt="Screenshot" width="500px">



<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/153b1187-44b3-4e93-8a87-54f1f905d056" alt="Screenshot" width="500px">

<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/071366ed-a71f-4f50-87c1-8e0835fd777f" alt="Screenshot" width="500px">


<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/203113da-21c9-4892-bb82-341b6ded7f40" alt="Screenshot" width="500px">

<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/fd8f5447-307c-4254-82ab-0505a0358777" alt="Screenshot" width="500px">

<img src="https://github.com/bhanu290/Tax-Calculator/assets/78996059/b654a5a1-a0ff-4aff-8300-5455c69c098c" alt="Screenshot" width="500px">




## Installation

1. Clone the repository: `git clone https://github.com/bhanu290/Tax-Calculator.git`
2. Open the index.html file in a web browser.




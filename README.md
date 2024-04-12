# Tax Calculator App

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



## Installation

1. Clone the repository: `git clone https://github.com/your-repo-url.git`
2. Open the index.html file in a web browser.



## License

This project is licensed under the [MIT License](LICENSE).

# JavaScript

## Background Color Changer - DOM

### Overview
<p>This JavaScript code creates a simple background color changer that assigns a random color to the webpage each time a button is clicked. Additionally, the generated color code is displayed and can be copied to the clipboard by clicking on it.</p>

### How It Works

#### 1. Generating a Random Color

- When the button is clicked, a random hexadecimal color is generated.
- The Math.random() function creates a random number between 0 and 16777215 (0xFFFFFF in hex).
- The number is converted to a hexadecimal string using .toString(16).
- The resulting string is prefixed with # to form a valid hex color code.

#### 2. Copying the Color Code

- When the displayed color code (#color element) is clicked, it is copied to the clipboard using navigator.clipboard.writeText().

### Output
<img src="https://github.com/BRajendra10/JS-Task/blob/ed633ce3c72cb18822ced8661e5cf0dd41a16f86/DOM/Background%20color%20changer/Background%20color%20changer.gif">

---

# Form Validation

## Overview
This JavaScript-based Sign-Up Form Validation ensures that users enter valid information before submitting the form. The validation process checks each input field for correctness and provides feedback through alerts.

## How It Works

- Name Field: Must not contain numbers or special characters.
- Email Field: Must be in lowercase and end with @gmail.com.
- Password Field: Must include at least one number, one special character, and match the confirm password field.
- If any field is empty, an alert prompts the user to fill in all fields.
- If invalid input is detected, a specific error message is displayed.
- If all conditions are met, a success message confirms successful sign-up.

### Output
<img src="https://github.com/BRajendra10/JS-Task/blob/714490a75560289db5e667ecbb2c61ea770fd9a9/DOM/Form%20validation/Form%20validation.gif">

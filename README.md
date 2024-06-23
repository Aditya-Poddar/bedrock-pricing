# Amazon Bedrock Pricing Calculator

![Calculator Preview](bedrock_cost_cal_image.png)

This web application provides a simple calculator for estimating monthly costs based on token prices and usage metrics.

## Features

- **Input Validation:** Ensures all input fields accept valid numeric values.
- **Calculation:** Computes the total monthly cost based on input token price, output token price, total input tokens, total output tokens, and requests per month.
- **Error Handling:** Displays error messages when invalid inputs are detected.
- **Responsive Design:** Optimized for various screen sizes using media queries.

## Usage

To use the calculator:

1. Open `index.html` in a web browser.
2. Fill in the required fields:
   - **Input Token Price Per 1000 Tokens**
   - **Output Token Price Per 1000 Tokens**
   - **Total No. of Input Tokens Per Request**
   - **Total No. of Output Tokens Per Request**
   - **Total No. of Requests Per Month**
3. Click on the **Calculate** button to see the monthly cost.
4. To perform a new calculation, click **New Calculation**.

## Development

This project uses HTML, CSS, and JavaScript for its functionality and styling. Key aspects of the code include:

- **HTML Structure:** Defines the form inputs, error messages, and result sections.
- **CSS Styling:** Provides responsive design, ensuring usability across devices.
- **JavaScript Logic:** Handles input validation, calculation of costs, and resetting the form.

## Contributing

Contributions are welcome. If you find any issues or have suggestions for improvements, please submit an issue or a pull request.


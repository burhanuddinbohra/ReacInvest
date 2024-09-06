# ReacInvest

## Overview

ReacInvest is a single-page React application designed to calculate and display investment returns over a specified duration. It allows users to input initial investment, annual investment, expected return rate, and investment duration to generate a detailed table of investment values.

## Features

- **Inputs**: 
  - Initial Investment
  - Annual Investment
  - Expected Return
  - Duration (in years)

- **Outputs**: 
  - Year (1, 2, 3, ..., Duration)
  - Investment Value
  - Interest (for the year)
  - Total Investment
  - Investment Capital

## Technologies Used

- **ReactJS**: For building the user interface
- **HTML**: For structuring the content
- **CSS**: For styling the application
- **JavaScript**: For implementing the logic
- **Vue**: For component structure and state management
- **npm**: For managing dependencies

## Learning Objectives

- **useState**: Managing state within functional components
- **Lifting State Up**: Moving state management to the parent component for better data flow
- **State Derivation**: Minimizing the use of `useState` by deriving values from the current state

## Usage
1. Enter the initial investment amount.
2. Enter the annual investment amount.
3. Provide the expected return rate (in percentage).
4. Specify the duration in years.
5. The application will generate a table showing the investment value, interest, total investment, and investment capital for each year.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/burhanuddinbohra/reacinvest.git
   
2. Navigate to the project directory:
   
   ```bash
   cd reacinvest

3. Install the dependencies:
    ```bash
     npm install
4. Start the application:
   ```bash
    npm run dev
   

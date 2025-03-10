# Quadratic Equations Solver

It is a console app i created as a task for KPI

It can solve any quadratic equation.

## Installing the program
***

First up, clone the repository via this command:

    https://github.com/yur-ochka/quadratic-equations-solver.git

Install the dependencies:

    npm install

## Running the program
There are two usage modes in this program:

Interactive mode (you need to enter numbers manually in console) and file mode (numbers will be parsed from file).

To start in interactive mode:

    node equation.js

Then the program will ask you to enter a, b and c numbers, representing coefficients in standart form of quadratic equation.

To start in file mode:

    node equation.js <file-name>

File should be in .txt format and contain three numbers positioned in line and separated with space. First number stands for a coefficient, second number for b coefficient and third number for c coefficient. For example:

    1 2 3

In this case the equation will look like this: x^2 + 2x + 3 = 0



## Revert commit

[Revert commit link](https://github.com/yur-ochka/quadratic-equations-solver/commit/4e49b8d289bdc47319f647a2b1ac82144395f7e4)

// 1. ""Importing and Exporting Modules:**
//     - **Question:** Create two modules, `mathOperations.js` and `main.js`. In `mathOperations.js`, define and export two functions: `add` (which adds two numbers) and `subtract` (which subtracts one number from another). In `main.js`, import these functions and use them to add and subtract two numbers, then log the results.
//     - **Hint:** Use `export` in `mathOperations.js` and `import` in `main.js`.

export function add(a,b)
{
    return a+b;         //adding two numbers
}

export function subtract(a,b)
{
    return a-b;         //subtract one number from another
}

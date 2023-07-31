// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4

// 2 => 2 * 2 = 4 -> Output-Pos 1

// 3 => 3 * 3 = 9 -> Output-Pos 2

// 4 => 4 * 4 = 16 -> Output-Pos 3

// 5 => 5 * 5 = 25 -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

function sortArrayByProduct(array) {
    // create a new array to store the products of the values and their respective indices
    // store the product in the new array
    const products = array.map((value, index) => value * (index + 1));
    // sort the new array in ascending order
    const sortedProducts = [...products].sort((a, b) => a - b);
    // create another new array to store the sorted values from the input array
    const sortedArray = sortedProducts.map(product => {
        // for each product, find the corresponding value in the input array and add it to the new array
      const index = products.indexOf(product);
      return array[index];
    });
    return sortedArray;
}
  
const inputArray = [23, 2, 3, 4, 5];
const sortedArray = sortArrayByProduct(inputArray);
console.log(sortedArray);
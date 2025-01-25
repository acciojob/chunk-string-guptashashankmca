// function stringChop(str, size) {
//   // your code here
// }

// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));

function stringChop(str, size) {
  // If the string is null, return an empty array
  if (str === null) {
    return [];
  }

  // Initialize an array to hold the chunks
  let result = [];

  // Loop through the string in steps of 'size' and slice chunks
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size)); // Slice the string and push the chunk
  }

  return result; // Return the array of chunks
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));


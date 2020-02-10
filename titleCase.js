//"groups the arrays into an array of arrays of given length, any remainding go in last array"

const titleCase = str => {
  let words = str.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};
console.log(titleCase("I'm a little tea pot"));

module.exports = {
  titleCase
};

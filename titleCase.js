// TITLE CASE

const titleCase = str => {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.startsWith('\'') ? (word.slice(0, 1) + word.charAt(1).toUpperCase() + word.slice(2)) : (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

console.log(titleCase("I'm a little tea pot"))

module.exports = {
  titleCase
}
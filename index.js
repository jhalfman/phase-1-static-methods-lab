class Formatter {
  //add static methods here
  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(word) {
    const arrayWord = word.split(" ");
    const newArrayWord = [];
    arrayWord.forEach(word => {
      const newWord = word[0].toUpperCase() + word.slice(1);
      if (["Of", "The", "And", "A", "An", "But", "For", "At", "By", "From"].indexOf(newWord) > -1 && word !== arrayWord[0]) {
        newArrayWord.push(newWord.toLowerCase());
      }
      else {
        newArrayWord.push(newWord);
      }
      console.log(newArrayWord);
      
      
    })
    console.log("Chicken Soup with Rice and a Few Other Songs" === "Chicken Soup With Rice and a Few Other Songs");
    return newArrayWord.join(" ");
  }
}

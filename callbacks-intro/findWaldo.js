const findWaldo = function(names, found) {
   names.forEach(name => {
    if (name === "Waldo") {
      found(names.indexOf(name));
    }
  });
  
  
}

const actionWhenFound = function(index) {
  console.log(`Found him! He's in index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
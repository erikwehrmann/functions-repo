const findWaldo = function(names, found) {
  names.forEach(name => {
    if (name === "Waldo") {
      found(names.indexOf(name));
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});
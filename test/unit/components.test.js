describe("Components", () => {
  const normalizedPath = require("path").join(__dirname, "components");

  require("fs")
    .readdirSync(normalizedPath)
    .forEach(function(file) {
      require("./components/" + file);
    });
});

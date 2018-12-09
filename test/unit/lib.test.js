describe("Lib", () => {
  const normalizedPath = require("path").join(__dirname, "lib");

  require("fs")
    .readdirSync(normalizedPath)
    .forEach(function(file) {
      require("./lib/" + file);
    });
});

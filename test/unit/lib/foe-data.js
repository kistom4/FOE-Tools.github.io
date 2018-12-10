describe("FOE Data", () => {
  const normalizedPath = require("path").join(__dirname, "foe-data");

  require("fs")
    .readdirSync(normalizedPath)
    .forEach(function(file) {
      require("./foe-data/" + file);
    });
});

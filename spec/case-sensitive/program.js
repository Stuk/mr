var test = require("test");
require("a");
try {
    require("B");
    test.assert(false, "should fail to require alternate spelling");
} catch (error) {
}
test.print("DONE", "info");

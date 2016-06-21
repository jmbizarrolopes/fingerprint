// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by clientjs.js.
import { name as packageName } from "meteor/clientjs";

// Write your tests here!
// Here is an example.
Tinytest.add('clientjs - example', function (test) {
  test.equal(packageName, "clientjs");
});

import name from "./exportingFile.js";
console.log("imported name", name);
import nameNew, { age, job } from "./exportingFile.js";
console.log("rest of imported items", nameNew, age, job);
// import * as MyData from "./exportingFile.js";
// console.log("find object", MyData)
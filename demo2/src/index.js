"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAsync_1 = require("./getAsync");
(async () => {
    try {
        const result = await getAsync_1.getAsync("https://my-json-server.typicode.com/typicode/demo/db");
        console.log(result);
    }
    catch (e) {
        console.log("Failed!");
        console.log(e);
    }
})();

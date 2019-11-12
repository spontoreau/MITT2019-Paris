import { getAsync } from "./getAsync";

(async () => {
    try {
        const result = await getAsync("https://my-json-server.typicode.com/typicode/demo/db");
        console.log(result);
    } catch(e) {
        console.log("Failed!");
        console.log(e);
    }
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const getAsync = (url) => {
    return new Promise((resolve, reject) => {
        http_1.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(data);
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
};
exports.getAsync = getAsync;

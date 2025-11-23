"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    console.log("Server is running...");
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "content-type": "Application/json" });
        res.end(JSON.stringify({
            message: "Hello From Node js with Typescript",
            path: req.url,
        }));
    }
});
server.listen(config_1.default.port, () => {
    console.log(`Server is running on port ${config_1.default.port}`);
});

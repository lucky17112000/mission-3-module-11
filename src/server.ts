import config from "./config";
import http, { IncomingMessage, Server, ServerResponse } from "http";
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running...");

    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "content-type": "Application/json" });
      res.end(
        JSON.stringify({
          message: "Hello From Node js with Typescript",
          path: req.url,
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

import config from "./config";
import http, { IncomingMessage, Server, ServerResponse } from "http";
import addRoutes, { routes } from "./helpers/Routehandler";

addRoutes("GET", "/", (req, res) => {
  res.writeHead(200, { "content-type": "Application/json" });
  res.end(
    JSON.stringify({
      message: "Hello From Node js with Typescript",
      path: req.url,
    })
  );
});

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running...");

    //welcome route

    // if (req.url == "/" && req.method == "GET") {
    //   res.writeHead(200, { "content-type": "Application/json" });
    //   res.end(
    //     JSON.stringify({
    //       message: "Hello From Node js with Typescript",
    //       path: req.url,
    //     })
    //   );
    // }

    const method = req.method?.toUpperCase() || "";
    const path = req.url;

    const methodMap = routes.get(method);
    const handler = methodMap?.get(path || "");
    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "content-type": "Application/json" });
      res.end(
        JSON.stringify({
          message: "Route not found",
          path: req.url,
        })
      );
    }

    // health cheak point
    // if (req.url == "/api" && req.method == "GET") {
    //   res.writeHead(200, { "content-type": "Application/json" });
    //   res.end(
    //     JSON.stringify({
    //       message: "Helth status is OK",
    //       path: req.url,
    //     })
    //   );
    // }
    // create user route
    // if (req.url == "/api/users" && req.method == "POST") {
    //   let body = "";
    //   //listen for data chunks
    //   req.on("data", (chunk) => {
    //     body += chunk.toString();
    //   });
    //   req.on("end", () => {
    //     try {
    //       const parseBody = JSON.parse(body);
    //       console.log(parseBody);
    //       console.log("Catching current cahnges");

    //       res.end(JSON.stringify(parseBody));
    //     } catch (err: any) {
    //       console.log(err?.message);
    //     }
    //   });
    // }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

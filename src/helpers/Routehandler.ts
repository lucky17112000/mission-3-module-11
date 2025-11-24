import { IncomingMessage, ServerResponse } from "http";

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;
export const routes: Map<string, Map<string, RouteHandler>> = new Map();
//1.string->get,post..e.t.c
//2.string->"/"   , "/api" , "/api/users"  e.t.c
//3.routehandler fuction to handle the route

function addRoutes(method: string, path: string, handler: RouteHandler) {
  if (!routes.has(method)) routes.set(method, new Map());
  routes.get(method)?.set(path, handler);
}

export default addRoutes;

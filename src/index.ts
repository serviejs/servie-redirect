import { resolve } from "url";
import { Request, Response } from "servie/dist/node";
import escapeHtml = require("escape-html");

/**
 * Simple redirect utility.
 */
export function redirect(req: Request, url: string, status = 302): Response {
  const location = resolve(req.url, url);

  if (req.method.toLowerCase() === "head") {
    return new Response(null, { status, headers: { Location: location } });
  }

  const u = escapeHtml(location);

  return new Response(`<p>Redirecting to <a href="${u}">${u}</a>.</p>`, {
    status,
    headers: { Location: location, "Content-Type": "text/html" }
  });
}

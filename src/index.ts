import { resolve } from 'url'
import { Request, Response, createHeaders } from 'servie'
import { createBody } from 'servie/dist/body/universal'
import escapeHtml = require('escape-html')

/**
 * Simple redirect utility.
 */
export function redirect (req: Request, url: string, statusCode = 302): Response {
  const location = resolve(req.url, url)
  const headers = createHeaders({ 'Location': location })

  if (req.method.toLowerCase() === 'head') {
    return new Response({ statusCode, headers })
  }

  const u = escapeHtml(location)
  const body = createBody(`<p>Redirecting to <a href="${u}">${u}</a>.</p>`)

  return new Response({ statusCode, headers, body })
}

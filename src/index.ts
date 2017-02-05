import { resolve } from 'url'
import { Request, Response } from 'servie'
import escapeHtml = require('escape-html')

/**
 * Simple redirect utility.
 */
export function redirect (req: Request, url: string, status = 302): Response {
  const location = resolve(req.url, url)
  const headers = { 'Location': location }

  if (req.method === 'HEAD') {
    return new Response({ status, headers })
  }

  const res = new Response({ status, headers })

  if (req.type === 'text/html') {
    const u = escapeHtml(location)
    res.body = `<p>Redirecting to <a href=${u}>${u}</a>.</p>`
  } else if (req.type === 'text/plain') {
    res.body = `Redirecting to ${location}.`
  }

  return res
}

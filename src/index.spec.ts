import { compose } from 'throwback'
import { redirect } from './index'
import { Request, Response } from 'servie'

describe('servie-redirect', () => {
  it('should send redirects', () => {
    const app = compose<Request, Response>([
      (req) => redirect(req, '/test')
    ])

    const req = new Request({ url: '/' })

    return app(req, finalhandler(req)).then((res) => {
      expect(res.toJSON()).toMatchSnapshot()
    })
  })
})

/**
 * Final 404 handler.
 */
function finalhandler (req: Request) {
  return function () {
    return Promise.resolve(new Response({
      status: 404,
      body: `Cannot ${req.method} ${req.url}`
    }))
  }
}

import { compose } from 'throwback'
import { redirect } from './index'
import { Request, Response } from 'servie'
import { finalhandler } from 'servie-finalhandler'

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

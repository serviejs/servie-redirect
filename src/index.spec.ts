import { compose } from "throwback";
import { Request, Response } from "servie/dist/node";
import { finalhandler } from "servie-finalhandler";
import { redirect } from "./index";

describe("servie-redirect", () => {
  it("should send redirects", () => {
    const app = compose<Request, Response>([req => redirect(req, "/test")]);

    const req = new Request("/");

    return app(req, finalhandler(req)).then(res => {
      expect(res).toMatchSnapshot();
    });
  });
});

import chai from "chai";
import chaiHttp from "chai-http";
import { baseUrl } from "../constant";
import { beforeEach } from "mocha";
import { expect } from "chai";

chai.use(chaiHttp);

describe("HTTPTransport", () => {
  beforeEach(() => {});
  it(".get", (done) => {
    chai
      .request(baseUrl)
      .get("/auth/user")
      .end((_: any, res: any) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it(".post", (done) => {
    chai
      .request(baseUrl)
      .post("/auth/signin")
      .send({ login: "artem", password: "artem" })
      .end((_: any, res: any) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it(".put", (done) => {
    chai
      .request(baseUrl)
      .put("/user/password")
      .send({ oldPassword: "artem", newPassword: "artem" })
      .end((_: any, res: any) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it(".delete", (done) => {
    chai
      .request(baseUrl)
      .delete("/chats")
      .send({ chatId: 123 })
      .end((_: any, res: any) => {
        expect(res).to.have.status(401);
        done();
      });
  });
});

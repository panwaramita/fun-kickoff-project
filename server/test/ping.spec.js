process.env.NODE_ENV = 'test';
const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");

chai.should();
chai.use(chaiHttp);

describe("/POST /auth/logout", () => {
  it("it should return 200 and message", (done) => {
    chai
      .request(server)
      .post('/auth/logout/')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal("You have successfully logged out");
        done();
      });
  });
});
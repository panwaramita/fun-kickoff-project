const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");

chai.should();
chai.use(chaiHttp);

const loginDetailInfo={
  'email':'panwar.amita@gmail.com',
  'password':'123456'
}
const loginDetailInvlidEmail={
  'username':'hanry',
  'email':'panagmail.com',
  'password':'amita@123'
}
const loginDetailInvalidPassword={
  'username':'123',
  'email':'panag@mail.com',
  'password':''
}
describe("/POST /auth/login", () => {
  it("it should return 200 and message", (done) => {
    chai
      .request(server)
      .post('/auth/login/')
      .send(loginDetailInfo)
      .end((err, res) => {
        const cookie=res.headers['set-cookie']; 
        res.should.have.status(200);
         cookie.should.not.be.empty;
          res.body.success.user.should.be.an('Object');
           done();
      });
  });
    it("it should return 400 and error message", (done) => {
    chai
      .request(server)
      .post('/auth/register/')
      .send(loginDetailInvlidEmail)
      .end((err, res) => {
          res.should.have.status(400);
          const msg=res.body.errors[0].msg;
          msg.should.equal('Please enter a valid email address');
          done();
      });
  });
it("it should return 400 and error message", (done) => {
  chai
    .request(server)  
    .post('/auth/login/')
    .send(loginDetailInvalidPassword)
    .end((err, res) => {
        res.should.have.status(400);
        const msg=res.body.errors[0].msg;
        msg.should.equal('Password is required');
        done();
    });
});
});
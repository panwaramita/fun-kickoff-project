const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");

chai.should();
chai.use(chaiHttp);

const register_detailUsername={
  'username':'Henry',
  'email':'pwar.Henry@gmail.com',
  'password':'Henry@123'
}
const register_detailEmail={
  'username':'Henry',
  'email':'panwar.Henry@gmail.com',
  'password':'Henry@123'
}
const register_detailInfo={
  'username':'asita',
  'email':'panaar.Henry@gmail.com',
  'password':'Henry@123'
}
const register_detailInvlidEmail={
  'username':'Henry',
  'email':'panaar.Henrygmail.com',
  'password':'Henry@13'
}
const register_detailInvalidUserName={
  'username':'',
  'email':'panaar.Henry@gmail.com',
  'password':'Henry@123'
}
const register_detailInvalidPassword={
  'username':'123',
  'email':'panaar.Henry@gmail.com',
  'password':'ami13'
}
describe("/POST /auth/register", () => {
  it("it should return 400 and message", (done) => {
    chai
      .request(server)
      .post('/auth/register/')
      .send(register_detailEmail)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.error.should.equal("A user with that email already exists");
        done();
      });
  });
  it("it should return 400 and message", (done) => {
    chai
      .request(server)
      .post('/auth/register/')
      .send(register_detailUsername)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.error.should.equal("A user with that username already exists");
        done();
      });
  });
  it("it should return 201 and message", (done) => {
    chai
      .request(server)
      .post('/auth/register/')
      .send(register_detailInfo)
      .end((err, res) => {
      const cookie=res.headers['set-cookie']; 
      res.should.have.status(201);
          cookie.should.not.be.empty;
        res.body.success.user.should.be.an('Object');

        const token=cookie[0].substr(cookie[0].indexOf("=") + 1);
        const id="61e78b4a74fcc293903ca2c";
        chai
        .request(server)
        .get('/auth/user?id='+id)
        .send({"cookies": {"token": token}})
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
      });
  });
  it("it should return 400 and error message", (done) => {
    chai
      .request(server)
      .post('/auth/register/')
      .send(register_detailInvlidEmail)
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
      .post('/auth/register/')
      .send(register_detailInvalidUserName)
      .end((err, res) => {
          res.should.have.status(400);
          const msg=res.body.errors[0].msg;
          msg.should.equal('Please enter a username');
          done();
      });
  });
});

it("it should return 400 and error message", (done) => {
  chai
    .request(server)  
    .post('/auth/register/')
    .send(register_detailInvalidPassword)
    .end((err, res) => {
        res.should.have.status(400);
        const msg=res.body.errors[0].msg;
        msg.should.equal('Please enter a password with 6 or more characters');
        done();
    });
});
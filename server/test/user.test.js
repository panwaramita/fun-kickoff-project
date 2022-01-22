const chai = require("chai");
const chaiHttp = require("chai-http");
const { server } = require("../app.js");

chai.should();
chai.use(chaiHttp);

const registerDetailUsername={
  'username':'Henry',
  'email':'pwar.Henry@gmail.com',
  'password':'Henry@123',
}
const registerDetailEmail={
  'username':'Henry',
  'email':'panwar.Henry@gmail.com',
  'password':'Henry@123',
}
const registerDetailInfo={
  'username':'asita',
  'email':'panaar.Henry@gmail.com',
  'password':'Henry@123',
}
const registerDetailInvalidEmail={
  'username':'Henry',
  'email':'panaar.Henrygmail.com',
  'password':'Henry@13',
}
const registerDetailInvalidUserName={
  'username':'',
  'email':'panaar.Henry@gmail.com',
  'password':'Henry@123',
}
const registerDetailInvalidPassword={
  'username':'123',
  'email':'panaar.Henry@gmail.com',
  'password':'ami13',
}
describe("/POST /auth/register", () => {
  it("it should return 400 and message", (done) => {
    chai
      .request(server)
      .post('/auth/register/')
      .send(registerDetailEmail)
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
      .send(registerDetailUsername)
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
      .send(registerDetailInfo)
      .end((err, res) => {
       res.should.have.status(201);
       res.cookies.should.not.be.empty;
       res.cookies.should.have.property('token');
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
      .send(registerDetailInvalidEmail)
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
      .send(registerDetailInvalidUserName)
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
    .send(registerDetailInvalidPassword)
    .end((err, res) => {
        res.should.have.status(400);
        const msg=res.body.errors[0].msg;
        msg.should.equal('Please enter a password with 6 or more characters');
        done();
    });
});
it("it should return 400 and error message", (done) => {
  chai
    .request(server)  
    .post('/auth/register/')
    .send()
    .end((err, res) => {
        res.should.have.status(400);
        res.cookies.should.have.property('token');
        const msg=res.body.errors[0].msg;
        msg.should.equal('Token not found');
        done();
    });
});
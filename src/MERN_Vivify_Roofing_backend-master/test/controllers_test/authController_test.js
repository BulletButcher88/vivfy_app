const {
  login,
  register
} = require('../../controllers/authController')
const chai = require('chai')
const mongoose = require('mongoose')
const User = require('../../models/User')

let req, res
beforeEach((done) => {
  res = {
    statusCalledWith: '',
    sendCalledWith: {},
    status: function(arg) {
      this.statusCalledWith = arg;
      return this;
    },
    send: function(arg) {
      this.sendCalledWith = arg;
    }
  }

  req = {
    params: { id: undefined },
    body: {
      email: 'brett@vivify.com',
      password: 'password',
      name: 'Brett Winter',
      phone: '1234',
      role: 'admin',
      admin: true
    }
  }
  mongoose.connection.collections.users.drop(() => {
    done();
  })
})

describe('auth#register', () => {
  it('should send back a JWT', (done) => {
    register(req, res)
      .then(() => {
        chai.expect(res.sendCalledWith.token).to.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        done();
      })
  })

  it('should return status 201', (done) => {
    register(req, res)
    .then(() => {
      chai.expect(res.statusCalledWith).to.equal(201)
      done();
    })
  })
})

describe('auth#login', () => {
  beforeEach((done) => {
    register(req, res)
      .then(() => {
        done();
      })
  })

  it('should send back a JWT if the credentials are good', (done) => {
    login(req, res)
      .then(() => {
        chai.expect(res.sendCalledWith.token).to.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)
        done();
      })
  })

  it('should return status 200', (done) => {
    login(req, res)
      .then(() => {
        chai.expect(res.statusCalledWith).to.equal(200);
        done();
      })
  })
})
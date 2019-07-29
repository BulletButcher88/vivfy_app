const {
  index,
  show,
  create,
  edit,
  destroy,
  email
} = require('../../controllers/userController')
require('dotenv').config()
const chai = require('chai')

let req, reqEdit, res
beforeEach(() => {
  res = {
    statusCalledWith: '',
    sendCalledWith: '',
    status: function(arg) {
      this.statusCalledWith = arg;
      return this;
    },
    send: function(arg) {
      this.sendCalledWith = arg;
    }
  }

  req = {
    params: { id: null },
    body: {
      email: "brett@vivify.com",
      passwordDigest: "pass",
      role: "admin",
      name: "Brett Winter",
      phone: "1234"
    }
  }

  reqEdit = {
    params: { id: null },
    body: {
      email: "brett2@vivify.com"
    }
  }
})

describe('users#index', () => {
  it('returns a 200 status', (done) => {
    index(req, res)
      .then(() => {
        chai.expect(res.statusCalledWith).to.equal(200);
        done();
      })
  })

  it('returns an array of users from database', (done) => {
    index(req, res)
      .then(() => {
        chai.expect(res.sendCalledWith).to.be.a('array');
        chai.expect(res.sendCalledWith).to.be.empty;
        done();
      })
  })
})

describe('users#show', () => {
  beforeEach((done) => {
    let id
    create(req, res)
      .then(() => {
        id = res.sendCalledWith._id
        req.params.id = id
        done();
      })
  })

  it('returns a 200 status', (done) => {
    show(req, res)
    .then(() => {
      chai.expect(res.statusCalledWith).to.equal(200);
      done();
    })
  })

  it('returns the specified user from database', (done) => {
    show(req, res)
      .then(() => {
        chai.expect(res.sendCalledWith).to.be.a('object');
        chai.expect(res.sendCalledWith.name).to.equal("Brett Winter");
        done();
      })
  })
})

describe('users#create', () => {
  it('returns a 201 status', (done) => {
    create(req, res)
      .then(() => {
        chai.expect(res.statusCalledWith).to.equal(201)
        done();
      })
  })

  it('returns a database object', (done) => {
    create(req, res)
      .then(() => {
        chai.expect(res.sendCalledWith).to.include(req.body)
        done();
      })
  })
})

describe('users#edit', () => {
  beforeEach((done) => {
    let id
    create(req, res)
      .then(() => {
        id = res.sendCalledWith._id
        reqEdit.params.id = id
        done();
      })
  })

  it('returns a 202 status', (done) => {
    edit(reqEdit, res)
      .then(() => {
        chai.expect(res.statusCalledWith).to.equal(202)
        done()
      })
  })

  it('returns the updated document', (done) => {
    edit(reqEdit, res)
      .then(() => {
        chai.expect(res.sendCalledWith.email).to.equal('brett2@vivify.com')
        done()
      })
  })
})

describe('users#destroy', () => {
  beforeEach((done) => {
    let id
    create(req, res)
      .then(() => {
        id = res.sendCalledWith._id
        req.params.id = id
        done();
      })
  })

  it('should return a 202 status', (done) => {
    destroy(req, res)
      .then(() => {
        chai.expect(res.statusCalledWith).to.equal(202)
        done()
      })
  })

  it('should return the deleted item', (done) => {
    destroy(req, res)
      .then(() => {
        chai.expect(res.sendCalledWith.name).to.equal("Brett Winter")
        done();
      })
      .catch((err) => console.log(err))
  })
})

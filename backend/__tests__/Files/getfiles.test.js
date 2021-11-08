/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
const { default: axios } = require('axios');
const app = require('../../../server');
const sinon = require('sinon');
const { commons } = require('../config/globalSetup');
const sampleFileList = require('../dummies/Files/getAllFiles.json');
const chai = require('chai');
const {expect} =  require('chai');
const chaiHTTP = require('chai-http');
const sinonChai = require('sinon-chai');

const sandbox = sinon.createSandbox();

// set middleware for chai 
chai.use(chaiHTTP);
chai.use(sinonChai);


describe('FILES TESTS', () => {

	// set axios stub 
	let axiosGetStub;

	// set hook before each unit test is run
	beforeEach(() => {
		axiosGetStub = sandbox.stub(axios, 'get').returns(sampleFileList);

	});

	// restore sandbox
	afterEach(() => {
		sandbox.restore();
	});
    
	// refresh sinon && sandbox 
	after(() => {
		sandbox.restore();
		sinon.restore();
	});

	it('Should get all files successfully', (done) => {
		chai
			.request(app)
			.get('/api/v1/files/all')
			.end((err, res) => {
				expect(err).to.not.be.an('error');
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(axiosGetStub).to.have.been.calledOnce;
				expect(res.body).to.be.an('object');
				expect(res.body.data).to.be.an('array');
				expect(res.body).to.have.property('status', 'success');
				expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
				done();
			});
	});

	it('should get files by specified type -> ZIP', async () => {
		chai
			.request(app)
			.get('/api/v1/files/type/zip')
			.end((err, res) => {
				expect(err).to.not.be.an('error');
				expect(res).to.have.status(200);
				expect(res).to.be.json;
				expect(axiosGetStub).to.have.been.calledOnce;
				expect(res.body).to.be.an('object');
				expect(res.body).to.have.property('status', 'success');
				expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
				done();
			});
	});

});
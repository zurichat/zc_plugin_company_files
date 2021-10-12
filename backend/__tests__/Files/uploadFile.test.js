/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
const { default: axios } = require('axios');
const app = require('../../../server');
const sinon = require('sinon');
const { commons } = require('../config/globalSetup');
const fileUploadReqResponse = require('../dummies/Files/fileUploadRequestResponse.json');
const fileUploadRequest = require('../dummies/Files/fileUploadRequest.json');
const chai = require('chai');
const {expect} =  require('chai');
const chaiHTTP = require('chai-http');
const sinonChai = require('sinon-chai');
const { response } = require('express');

const sandbox = sinon.createSandbox();

// set middleware for chai 
chai.use(chaiHTTP);
chai.use(sinonChai);

// set axios stub 
let axiosPostStub;

// cache file info
let fileId; let fileName;
describe('FILE UPLOAD TESTS', () => {

    // set hook before each unit test is run
    before(async () => {
        axiosPostStub = sandbox.stub(axios, 'post').returns(fileUploadReqResponse);
       let res = await chai.request(app).post('/api/v1/files/uploadRequest')
         .send(fileUploadRequest);    
        ({fileId, fileName} = res.body.data);
      
    });

    afterEach(() => {        
        sandbox.restore();
    });

    // refresh sinon sandbox 
    after(() => {        
        // Delete cache.
        fileId,fileName = null;
        
        sandbox.restore();
        sinon.restore();
    });


    //  it('should upload file and insert file details in the db', () => { 
    //     chai
    //     .request(app)
    //     .post('/api/v1/files/upload')
    //     .set('Content-Range', commons.Files.contentRange)
    //     .set('X-File-Id', fileId || commons.Files.fileId)
    //     .set('X-Folder-Id', commons.Files.folderId || null)
    //     .send(require('../dummies/Files/files.json'))
    //     .end((err, res) => {
    //       expect(err).to.be.an('error');
    //       expect(res).to.have.status(400);
    //     //   expect(res).to.be.json;
    //     //   expect(axiosPostStub).to.have.been.calledOnce;
    //     //   expect(res.body).to.be.an('object');
    //     //   expect(res.body).to.have.property('status', 'success');
    //     //   expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
    //       done();
    //     });

    // });

    
    it('should get upload status of a file', (done) => {      
        chai
        .request(app)
        .get(`/api/v1/files/uploadStatus?fileName=${fileName}&fileId=${fileId}`)
        .end((err, res) => {
          expect(err).to.not.be.an('error');
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status', 'success');
          expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
          done();
        });

    });

    //  it('should init file upload chunk', (done) => {      
    //     chai
    //     .request(app)
    //     .post(`'/api/v1/files/uploadRequest'`)
    //     .send(fileUploadRequest)
    //     .end((err, res) => {
    //       expect(err).to.not.be.an('error');
    //       expect(res).to.have.status(200);
    //       expect(res).to.be.json;
    //       expect(res.body).to.be.an('object');
    //       expect(res.body).to.have.property('status', 'success');
    //       expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
    //       done();
    //     });

    // });
});
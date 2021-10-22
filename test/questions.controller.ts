import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';
import * as HttpStatus from 'http-status-codes';
import { doesNotReject } from 'assert';

let exampleId = '6172281082b86bd5902941a3';
let criteria = 'Modern Physics';

describe('Questions', () => {

  it('should get all questions', () =>
    request(Server)
      .get('/api/v1/questions')
      .expect(HttpStatus.OK)
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.lengthOf.greaterThan(1);
      }));

  it('should get an questions by id', () =>
    request(Server)
      .get(`/api/v1/questions/${exampleId}`)
      .expect(HttpStatus.OK)
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('question')
          .equal('Question 4');
      }));

  it('should get an questions by criteria', () =>
    request(Server)
      .get(`/api/v1/questions/search?q=${criteria}`)
      .expect(HttpStatus.OK)
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array').to.have.length(3);
      }));    

});

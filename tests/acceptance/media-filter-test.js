/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
// import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance: MediaFilter', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe("visiting the page", function() {
    it("displays the most recent learning resources");
    it("displays the filters");
    it("has marks the all filter as active");
    it("displays the search box");

    describe("the appearance of one of the cards", function() {
      it("has an image");
      it("has a title");
      it("has a category");
      it("has preview text");
      it("has a publication date");
      it("is a link to the resource itself");
    });

    describe("clicking on the podcast filter", function() {
      it("only shows the media cards of that select type");
      it("marks the podcast filter as active");
    });

    describe("clicking on search", function() {
      it("focuses on the search box");
      describe("typing a query that has results", function() {
        it("renders the media cards that are relevant to that query");
      });
      describe("typing a query that has no results", function() {
        it("will do something eventually");
      });
    });
  });
});

/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
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
    beforeEach(function() {
      visit('/');
    });

    it("displays the most recent learning resources", function() {
      expect($(".test-resource-card")).to.have.length(6);
      expect($(".test-resource-card:eq(0)")).to.have.attr("title", "A Sprinkling of Ember");
      expect($(".test-resource-card:eq(1)")).to.have.attr("title", "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin");
      expect($(".test-resource-card:eq(2)")).to.have.attr("title", "What it takes to bring Ruby to Jenkins");
      expect($(".test-resource-card:eq(3)")).to.have.attr("title", "A Sprinkling of Ember");
      expect($(".test-resource-card:eq(4)")).to.have.attr("title", "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin");
      expect($(".test-resource-card:eq(5)")).to.have.attr("title", "What it takes to bring Ruby to Jenkins");
    });
    it("displays the filters", function() {
      expect($('.test-all-filter')).to.have.length(1);
      expect($('.test-podcast-filter')).to.have.length(1);
      expect($('.test-talks-filter')).to.have.length(1);
      expect($('.test-blog-filter')).to.have.length(1);
    });
    it("marks the all filter as active", function() {
      expect($('.test-all-filter')).to.have.class('active');
    });
    it("displays the search box", function() {
      expect($('.test-search-box')).to.have.length(1);
    });

    describe.skip("the appearance of one of the cards", function() {
      let card;
      beforeEach(function() {
        card = $('.test-resource-card');
      });

      it("has an image", function() {
        expect($(card).find('img')).to.have.attr('src', 'http://www.lol.gif');
      });
      it("has a title", function() {
        expect($(card).find('.test-title')).to.have.text('A Sprinkling of Ember');
      });
      it("has a category", function() {
        expect($(card).find('.test-resource-type')).to.have.text('Software');
      });
      it("has preview text", function() {
        expect($(card).find('.test-preview-text')).to.have.text('Some preview text');
      });
      it("has a publication date", function() {
        expect($('.test-resource-card')).to.have.prop('publish-date', 'UTC12-25-2016:10:10:10:Z01');
      });
      it("is a link to the resource itself", function() {
        expect($('.test-resource-card')).to.have.prop('href', 'http://www.somepath.com');
      });
    });

    describe.skip("clicking on the podcast filter", function() {
      it("only shows the media cards of that select type");
      it("marks the podcast filter as active");
    });

    describe.skip("clicking on search", function() {
      it("focuses on the search box");
      describe("typing a query that has results", function() {
        it("renders the media cards that are relevant to that query");
      });
      describe.skip("typing a query that has no results", function() {
        it("will do something eventually");
      });
    });
  });
});

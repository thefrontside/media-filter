/* jshint expr:true */
import Ember from 'ember';
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
      let card = $('.test-resource-card');

      expect(card).to.have.length(6);
      expect(card.eq(0)).to.have.attr("title", "A Sprinkling of Ember");
      expect(card.eq(1)).to.have.attr("title", "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin");
      expect(card.eq(2)).to.have.attr("title", "What it takes to bring Ruby to Jenkins");
      expect(card.eq(3)).to.have.attr("title", "A Sprinkling of Ember");
      expect(card.eq(4)).to.have.attr("title", "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin");
      expect(card.eq(5)).to.have.attr("title", "What it takes to bring Ruby to Jenkins");
    });

    it("displays the filters", function() {
      expect($('.test-all-filter')).to.have.length(1);
      expect($('.test-podcast-filter')).to.have.length(1);
      expect($('.test-talk-filter')).to.have.length(1);
      expect($('.test-blog-filter')).to.have.length(1);
    });

    it("marks the all filter as active", function() {
      expect($('.test-all-filter')).to.have.class('active');
    });

    it("displays the search box", function() {
      expect($('.test-search-box')).to.have.length(1);
    });

    describe("the appearance of one of the cards", function() {
      let firstCard;

      beforeEach(function() {
        firstCard = Ember.$('.test-resource-card').first();
      });

      it("has an image", function() {
        expect(firstCard.find('img')).to.have.attr('src');
      });
      it("has a title", function() {
        expect(firstCard).to.have.attr('title', 'A Sprinkling of Ember');
      });
      it("has a category", function() {
        expect(firstCard.find('.test-resource-card__type')).to.have.text('blog');
      });
      it("has preview text", function() {
        expect(firstCard.find('.test-resource-card__full')).to.have.text('How I destroyed my laptop with a single NPM install');
      });
      it("has a publication date", function() {
        expect(firstCard.find('.test-resource-card__publishDate')).to.have.text('UTC12-25-2016:10:10:10:Z01');
      });
      it("is a link to the resource itself", function() {
        expect(firstCard).to.have.attr('href', 'http://frontside.io/blog/2016-melty-cpu.html');
      });
    });

    describe("clicking on the podcast filter", function() {
      let podcastButton = '.test-podcast-filter a';
      let displayedCards;

      beforeEach(function() {
        Ember.$(podcastButton).click().trigger('click');
        displayedCards = Ember.$('.test-resource-card');
        console.log(displayedCards);
      });

      it('updates the query param', function() {
        expect(currentURL()).to.be.equal('/?type=podcast');
      });

      it("only shows the media cards of that select type", function() {
        let podcastCards = displayedCards.filter((idx, card) => {
          return $(card).find('.test-resource-card__type').text() === 'podcast';
        });

        expect(podcastCards).to.have.length(2);
      });

      it("marks the podcast filter as active", function() {
        expect(Ember.$(podcastButton)).to.have.class('active');
      });
    });

    describe.skip("clicking on search", function() {
      let searchBox = $('.test-search-box');

      beforeEach(function() {
        Ember.$(searchBox).click().trigger('click');
      });

      it("renders the search text area", function() {
        expect(searchBox).to.have.length(1);
      });

      it("lets user type a query in the text area", function() {
        fillIn(searchBox, 'some search query');
      });

      // it("render results based on the users search", function() {

      // });
    });
  });
  describe("typing a query that has results", function() {
    it("renders the media cards that are relevant to that query");
  });
  describe.skip("typing a query that has no results", function() {
    it("will do something eventually");
  });
});

/* jshint expr:true */



// loading the page
// apply a filter w/o reloading the page


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

    it("displays the 6 most recent learning resources", function() {
      let card = $('.test-resource-card');

      expect(card).to.have.length(6);
      expect(card.eq(0)).to.have.attr("title", "Dogs can code");
      expect(card.eq(1)).to.have.attr("title", "How to teach people to stop using emacs");
      expect(card.eq(2)).to.have.attr("title", "Mind Blown");
      expect(card.eq(3)).to.have.attr("title", "How many lols can you get without trying");
      expect(card.eq(4)).to.have.attr("title", "Mustangs and Cisco");
      expect(card.eq(5)).to.have.attr("title", "How learning Javascript can make you ok I guess");
    });

    it("displays the filters", function() {
      expect($('.test-all-filter')).to.have.length(1);
      expect($('.test-podcast-filter')).to.have.length(1);
      expect($('.test-talk-filter')).to.have.length(1);
      expect($('.test-blog-filter')).to.have.length(1);
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
        expect(firstCard).to.have.attr('title', 'Dogs can code');
      });
      it("has a category", function() {
        expect(firstCard.find('.test-resource-card__type')).to.have.text('talk');
      });
      it("has preview text", function() {
        expect(firstCard.find('.test-resource-card__full')).to.have.text('Rea creates PRs between 3 and 6 am');
      });
      it("has a publication date", function() {
        expect(firstCard.find('.test-resource-card__publishDate')).to.have.text('UTC12-25-2016:10:15:10:Z01');
      });
      it("is a link to the resource itself", function() {
        expect(firstCard).to.have.attr('href', 'http://youtube.com/x4fbl4820xbd');
      });
    });

    describe("clicking on the podcast filter", function() {
      let podcastButton = '.test-podcast-filter a';
      let displayedCards = '.test-resource-card';

      beforeEach(function() {
        Ember.$(podcastButton).click().trigger('click');
      });

      it('updates the query param', function() {
        expect(currentURL()).to.be.equal('/?type=podcast');
      });

      it("only shows the media cards of that select type", function() {
        let podcastCards = $(displayedCards).filter((idx, card) => {
          return Ember.$(card).find('.test-resource-card__type').text() === 'podcast';
        });

        expect(podcastCards).to.have.length(4);
      });
    });

    describe("viewing the search box", function() {
      let searchBox;

      beforeEach(function() {
        searchBox = Ember.$('.test-search-box');
      });

      it("renders the search text area", function() {
        expect(searchBox).to.have.length(1);
      });
    });

    describe("typing a query that has results", function() {
      let searchBox;
      let cardsList = '.test-resource-card';

      beforeEach(function() {
        searchBox = Ember.$('.test-search-box');
        searchBox.val('laptop');
        searchBox.trigger('keyup');
      });

      it("lets user type a query in the search", function() {
        expect(searchBox).to.have.value('laptop');
      });

      it("renders the media cards that are relevant to that query", function() {
        let filteredCards = Ember.$(cardsList);
        expect(filteredCards.length).to.equal(2);
      });
    });

    describe("typing a query that has no results", function() {
      let searchBox;
      let cardsList = '.test-resource-card';

      beforeEach(function() {
        searchBox = Ember.$('.test-search-box');
        searchBox.val('velociraptor');
        searchBox.trigger('keyup');
      });

      it("will not render any cards", function() {
        let filteredCards = Ember.$(cardsList);
        expect(searchBox).to.have.value('velociraptor');
        expect(filteredCards.length).to.have.equal(0);
      });
    });

    describe("clicking on the talk filter and typing a query", function() {
      let searchBox;
      let cardsList = '.test-resource-card';
      let talkButton = $('.test-podcast-talk a');
      let talkCards;

      beforeEach(function() {
        searchBox = Ember.$('.test-search-box');
        talkButton.click();
        talkCards = $(cardsList).filter((idx, card) => {
          return $(card).find('.test-resource-card__type').text() === 'talk';
        });
        searchBox.val('intricacies');
        searchBox.trigger('keyup');
      });

      it("will render podcast cards with Ember query", function() {
        talkCards = Ember.$(cardsList);
        expect(searchBox).to.have.value('intricacies');
        expect(talkCards.length).to.equal(1);
      });
    });
  });
});

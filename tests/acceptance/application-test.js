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
      let card;
      let filteredCards;

      beforeEach(function() {
        this.searchBox = Ember.$('.test-search-box');
        this.searchBox.val('laptop');
        this.searchBox.trigger('keyup');
        // fillIn('.test-search-box', 'laptop');
        this.card = $('.test-resource-card');
        this.displayedCards = $(this.card).filter(function(index, card) {
          return $(card).css('display') != 'none';
        });
      });

      it("lets user type a query in the search", function() {
        expect(this.searchBox).to.have.value('laptop');
      });

      it("renders the media cards that are relevant to that query", function() {
        expect(this.card.length).to.equal(2);
      });
    });

    describe.skip("typing a query that has no results", function() {
      let searchBox;
      let card;
      let displayedCards;

      beforeEach(function() {
        this.searchBox = Ember.$('.test-search-box');
        this.card = $('.test-resource-card');
        this.searchBox.val('velociraptor');
      });

      it("will not render any cards", function() {
        expect(this.searchBox).to.have.value('velociraptor');
        expect(this.displayedCards.length).to.have.equal(0);
      });
    });

    describe.skip("clicking on a filter and typing a query", function() {
      let searchBox;
      let card;
      let podcastButton;
      let displayedCards;

      beforeEach(function() {
        this.searchBox = Ember.$('.test-search-box');
        this.card = $('.test-resource-card');
        this.podcastButton = $('.test-podcast-filter a');
        this.podcastButton.click();
        let podcastCards = displayedCards.filter((idx, card) => {
          return $(card).find('.test-resource-card__type').text() === 'podcast';
        });

        it("will render podcast cards with Ember query", function() {
          Ember.$(this.searchBox).click();
          expect(this.searchBox).to.have.value('Ember');
          expect(this.podcastCards).to.have.length(2);
        });
      });
    });
  });
});

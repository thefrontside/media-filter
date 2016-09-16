/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

describeComponent(
  'search-filter',
  'Integration: SearchFilterComponent',
  {
    integration: true
  },
  function() {
    it('renders the cards', function() {
      let cards = [
        {
          authors: ["Robert DeLuca"],
          fullText: "How I destroyed my laptop with a single NPM install"
        },
        {
          authors: ["Stephanie Riera", "Charles Lowell"],
          fullText: "A spirit quest of deep Ember proportions"
        },
        {
          authors: ["Alex Ford"],
          fullText: "A discussion on the intricacies of composable helpers"
        },
        {
          authors: ["Robert DeLuca"],
          fullText: "How I destroyed my laptop with a single NPM install"
        },
        {
          authors: ["Stephanie Riera", "Charles Lowell"],
          fullText: "A spirit quest of deep Ember proportions"
        },
        {
          authors: ["Alex Ford"],
          fullText: "A discussion on the intricacies of composable helpers"
        }
      ];
      let filteredCards = [
        {
         authors: ["Robert DeLuca"],
          fullText: "How I destroyed my laptop with a single NPM install"
        }
      ];

      this.set('cardObj', cards);
      this.render(hbs `
        {{#search-filter card=cardObj}}
        {{/search-filter}}
        `);


      test('should initially load all listings', function (assert) {
        this.on('filterByQuery', (val) => {
          if (val === '') {
            return Ember.RSVP.resolve(cards);
          } else {
            return Ember.RSVP.resolve(filteredCards);
          }
        });


        this.render(hbs`
          {{#search-filter
            filter=(action 'filterByQuery')
            as |resources|}}

          {{/search-filter}}
        `);

        this.$('.search-filter input').val('Rob').keyup();

        return wait().then(() => {
          assert.equal(this.$('.text-search-box').length, 3);
          assert.equal(this.$('.text-search-box').first().text().trim(), 'Robert DeLuca');
        });
      });
    });
  });

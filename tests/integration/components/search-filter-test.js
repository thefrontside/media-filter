/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'search-filter',
  'Integration: SearchFilterComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {

      const CARDS = this.get('filteredMedia');

      test('should initially load all listings', function (assert) {
        this.on('filterByQuery', (val) => {
          if (val === '') {
            return Ember.RSVP.resolve(CARDS);
          } else {
            return Ember.RSVP.resolve(FILTERED_CARDS);
          }
        });


        this.render(hbs`
        {{#search-filter
          filter=(action 'filterByQuery')
          as |resources|}}
          <ul class="">
          {{#each resources as |searchQuery|}}
          <li>{{card result=searchQuery}}</li>
          {{/each}}
        </ul>
          {{/search-filter}}
`);

        //Will I hardcode a users query?
        this.$('.search-filter input').val('San').keyup();

        // return wait().then(() => {
        //   assert.equal(this.$('.city').length, 6);
        //   assert.equal(this.$('.city').first().text().trim(), 'San Francisco');
        // });

      });
    });

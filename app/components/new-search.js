import Ember from 'ember';

export default Ember.Component.extend({
  query: '',

  results: Ember.computed('filter', 'dataset', 'query', function() {
    let filter = this.get('filter');
    let query = this.get('query');
    let dataset = this.get('dataset');
    return filter(dataset, query);
  }),

  actions: {
    handleFilterEntry(query) {
      this.set('query', query);
    }
  }
});

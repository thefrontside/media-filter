import Ember from 'ember';

export default Ember.Component.extend({
  query: '',

  init() {
    this._super(...arguments);
    let initialResults = this.get('filter')('');
    this.set('results', initialResults);
  },

  actions: {
    handleFilterEntry() {
      let query = this.get('query');
      let results = this.get('filter')(query);
      this.set('results', results);
    }
  }
});

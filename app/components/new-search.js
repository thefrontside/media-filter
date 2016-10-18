import Ember from 'ember';

export default Ember.Component.extend({
  query: '',

  actions: {
    onSearch(query) {
      this.get('on-search')(query);
    }
  }
});

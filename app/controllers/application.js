import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query', 'type'],
  query: '',
  type: null,

  _mediaByType: Ember.computed('type', 'model', function() {
    var media = this.get('model');
    var type = this.get('type');
    let isFiltering = type !== null && type !== 'all';

    if (isFiltering) {
      return media.filter((item) => {
        return item.type === type;
      });
    }
    return media;
  }),

  filteredMedia: Ember.computed('_mediaByType', 'query', function() {
    let media = this.get('_mediaByType');
    let query = this.get('query');
    let isQuerying = !!query.length;

    if (isQuerying) {
      return media.filter((resource) => {
        return resource.fullText.match(query);
      });
    }
    return media;
  }),

  actions: {
    filterByQuery(query) {
      // set the `query` to compute filteredMedia
      this.set('query', query);
    },

    filterByType(type) {
      // set the `type` to compute _mediaByType
      this.set('type', type);
    }
  }
});

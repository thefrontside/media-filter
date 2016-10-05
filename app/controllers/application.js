import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type'],
  type: null,


  filteredMedia: Ember.computed('type', 'model', function() {
    var chosenType = this.get('type');
    var mediaList = this.get('model');
    console.log('filteredmediahere');

    if (chosenType == null) {
      return mediaList;
    } return mediaList.filter( item => {
      return item.type === chosenType;
    });
  }),

  logType: Ember.observer('type', function() {
    console.log('type changed', this.get('type'));

  }),

  logModel: Ember.observer('model', function() {
    console.log('model changed', this.get('model'));
  }),

  logFilteredMedia: Ember.observer('filteredMedia', function() {
    console.log('FM changed', this.get('filteredMedia'));
  }),

  actions: {
    filterByQuery(dataset, query) {
      if (query === '') {
        return dataset;
      } else {
        return dataset.filter(resource => {
          return resource.fullText.match(query);
        });
      }
    }
  }
});

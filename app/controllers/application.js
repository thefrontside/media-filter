import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['type'],
  type: null,

  filteredMedia: Ember.computed('type', 'model', function() {
    var chosenType = this.get('type');
    var mediaList = this.get('model');

    if (chosenType == null) {
      return mediaList;
    } return mediaList.filter( item => {
      return item.type === chosenType;
    });
  }),

  //TODO: Need a computed property to filter by type on filteredMedia

  actions: {
    filterByQuery( query) {
      let dataset = this.get('filteredMedia');
      if (query === '') {
        this.set('filteredMedia', dataset);
      } else {
        let filteredDataset = dataset.filter((resource) => {
          return resource.fullText.match(query);
        });
        this.set('filteredMedia', filteredDataset);
      }
    },

    filterByType(type) {
      let mediaList = this.get('model');
      if (type === 'all') {
        this.set('filteredMedia', mediaList);
      } else {
        let filteredModel = mediaList.filter( item => {
          return item.type === type;
        });
        this.set('filteredMedia', filteredModel);
      }
    }
  }
});

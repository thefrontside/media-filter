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
  })
});
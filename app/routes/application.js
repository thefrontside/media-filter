import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('resources');
  },

  afterModel() {
    this.transitionTo('learning');
  }
});

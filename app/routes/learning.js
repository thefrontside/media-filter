import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
   type: {
      replace: true
   }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
   blog: {
      replace: true
   },
   podcast: {
      replace: true
    },
   talks: {
      replace: true
    }
  }
});

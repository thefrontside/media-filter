import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['blog', 'talks', 'podcast'],
  blog: null,
  talks: null,
  podcast: null,

  filteredBlogs: Ember.computed('blog', 'model', function() {
    var blog = this.get('blog');
    var media = this.get('model');

    if (blog) {
      return media.filterBy('blog', blog);
    } else {
      return media;
    }
  }),
  filteredTalks: Ember.computed('talks', 'model', function() {
    var talks = this.get('talks');
    var media = this.get('model');

    if (talks) {
      return media.filterBy('talks', talks);
    } else {
      return media;
    }
  }),
  filteredPodcast: Ember.computed('podcast', 'model', function() {
    var podcast = this.get('podcast');
    var media = this.get('model');

    if (podcast) {
      return media.filterBy('podcast', podcast);
    } else {
      return media;
    }
  })
});

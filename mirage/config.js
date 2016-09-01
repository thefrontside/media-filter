import { faker } from 'ember-cli-mirage';

export default function configure() {

  let image = function() {
    return faker.image.imageUrl();
  };
  // These comments are here to help you get started. Feel free to delete them.

  /*
   Config (with defaults).

   Note: these only affect routes defined *after* them!
   */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
   Shorthand cheatsheet:

   this.get('/posts');
   this.post('/posts');
   this.get('/posts/:id');
   this.put('/posts/:id'); // or this.patch
   this.del('/posts/:id');

   http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
   */

  this.get('/resources', function() {
    return [
      {
        id: "1dgaf10101",
        type: "blog",
        title: "A Sprinkling of Ember",
        authors: ["Robert DeLuca"],
        url: "http://frontside.io/blog/2016-melty-cpu.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["disasters", "comedy", "node.js"],
        imageUrl: image(),
        fullText: "The other day, when blah blah...",
        previewText: "How I destroyed my laptop with a single NPM install"
      },
      {
        id: "1dgaf10102",
        type: "podcast",
        title: "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin",
        authors: ["Stephanie Riera", "Charles Lowell"],
        url: "http://frontsidethepodcast.simplecast.fm/5.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["podcasts", "ember"],
        imageUrl: "http://giphy.com/kick.gif",
        fullText: "i am a transcript",
        previewText: "Charles and Stephanie discuss how to kick ass at Ember"
      },
      {
        id: "1dgaf10102",
        type: "talk",
        title: "What it takes to bring Ruby to Jenkins",
        authors: ["Alex Ford"],
        url: "http://youtube.com/x4fal4820xbd",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["handlebars", "composable helpers", "ember"],
        imageUrl: "http://youtube.com/xhelxl58.jpg",
        fullText: "",
        previewText: "Recorded at EmberATX, Alex talks about..."
      },
      {
        id: "1dgaf10101",
        type: "blog",
        title: "A Sprinkling of Ember",
        authors: ["Robert DeLuca"],
        url: "http://frontside.io/blog/2016-melty-cpu.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["disasters", "comedy", "node.js"],
        imageUrl: "http://giphy.com/lolol.gif",
        fullText: "The other day, when blah blah...",
        previewText: "How I destroyd my laptop with a single NPM install"
      },
      {
        id: "1dgaf10102",
        type: "podcast",
        title: "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin",
        authors: ["Stephanie Riera", "Charles Lowell"],
        url: "http://frontsidethepodcast.simplecast.fm/5.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["podcasts", "ember"],
        imageUrl: "http://giphy.com/kick.gif",
        fullText: "i am a transcript",
        previewText: "Charles and Stephanie discuss how to kick ass at Ember"
      },
      {
        id: "1dgaf10102",
        type: "talk",
        title: "What it takes to bring Ruby to Jenkins",
        authors: ["Alex Ford"],
        url: "http://youtube.com/x4fal4820xbd",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["handlebars", "composable helpers", "ember"],
        imageUrl: "http://youtube.com/xhelxl58.jpg",
        fullText: "",
        previewText: "Recorded at EmberATX, Alex talks about..."
      }
    ];
  });
}

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
        id: "1dgaf01",
        type: "talk",
        title: "Dogs can code",
        authors: ["Alex Ford"],
        url: "http://youtube.com/x4fbl4820xbd",
        publishDate: "UTC12-25-2016:10:15:10:Z01",
        tags: ["code", "doggo", "puppers"],
        imageUrl: image(),
        fullText: "Rea creates PRs between 3 and 6 am",
        previewText: "What to do when you find your dogs PRs"
      },
      {
        id: "1dgaf02",
        type: "blog",
        title: "How to teach people to stop using emacs",
        authors: ["Robert DeLuca"],
        url: "http://frontside.io/blog/2016-emacs-is-dead.html",
        publishDate: "UTC12-25-2016:10:18:10:Z01",
        tags: ["editor", "emacs"],
        imageUrl: image(),
        fullText: "Rob talks about why he moved to using sublime",
        previewText: "Why emacs is so 2002"
      },
      {
        id: "1dgaf03",
        type: "podcast",
        title: "Mind Blown",
        authors: ["Charles Lowell"],
        url: "http://frontsidethepodcast.simplecast.fm/9.html",
        publishDate: "UTC12-25-2016:10:09:10:Z01",
        tags: ["immutable", "code"],
        imageUrl: image(),
        fullText: "Charles talks about creating inception with code",
        previewText: "Charles speaks on immutible mutables"
      },
      {
        id: "1dgaf04",
        type: "talk",
        title: "How many lols can you get without trying",
        authors: ["Brandon Hays"],
        url: "http://youtube.com/x4fal4810xbd",
        publishDate: "UTC12-25-2016:10:03:10:Z01",
        tags: ["dad", "community", "twitter"],
        imageUrl: image(),
        fullText: "Brando talks about dad jokes and his twitter fame",
        previewText: "Brandon discusses building community"
      },
      {
        id: "1dgaf05",
        type: "blog",
        title: "Mustangs and Cisco",
        authors: ["Robert DeLuca"],
        url: "http://frontside.io/blog/2016-mustangs.html",
        publishDate: "UTC12-25-2016:10:11:10:Z01",
        tags: ["racing", "mustangs", "vacation"],
        imageUrl: image(),
        fullText: "Rob writes about his experience in Cisco racing",
        previewText: "Rob and stangs"
      },
      {
        id: "1dgaf06",
        type: "podcast",
        title: "How learning Javascript can make you ok I guess",
        authors: ["Stephanie Riera"],
        url: "http://frontsidethepodcast.simplecast.fm/2.html",
        publishDate: "UTC12-25-2016:10:09:10:Z01",
        tags: ["podcasts", "javascript"],
        imageUrl: image(),
        fullText: "How learning javascript is so much fun",
        previewText: "Steph discusses learning JS"
      },
      {
        id: "1dgaf07",
        type: "talk",
        title: "What it takes to hike while pushing code",
        authors: ["Alex Ford"],
        url: "http://youtube.com/x4fal4823xbd",
        publishDate: "UTC12-25-2016:10:02:10:Z01",
        tags: ["nature", " helpers", "ember"],
        imageUrl: image(),
        fullText: "Alex speaks about combining code and hiking",
        previewText: "Alex loves talking cool stuff"
      },
      {
        id: "1dgaf08",
        type: "blog",
        title: "A Sprinkling of Ember",
        authors: ["Robert DeLuca"],
        url: "http://frontside.io/blog/2016-melty-cpu.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["disasters", "comedy", "node.js"],
        imageUrl: image(),
        fullText: "How I destroyed my laptop with a single NPM install",
        previewText: "The other day, when blah blah.."
      },
      {
        id: "1dgaf09",
        type: "podcast",
        title: "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin",
        authors: ["Stephanie Riera", "Charles Lowell"],
        url: "http://frontsidethepodcast.simplecast.fm/5.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["podcasts", "ember"],
        imageUrl: image(),
        fullText: "A spirit quest of deep Ember proportions",
        previewText: "Charles and Stephanie discuss how to kick ass at Ember"
      },
      {
        id: "1dgaf10",
        type: "talk",
        title: "What it takes to bring Ruby to Jenkins",
        authors: ["Alex Ford"],
        url: "http://youtube.com/x4fal4820xbd",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["handlebars", "composable helpers", "ember"],
        imageUrl: image(),
        fullText: "A discussion on the intricacies of composable helpers",
        previewText: "Recorded at EmberATX, Alex talks about..."
      },
      {
        id: "1dgaf11",
        type: "blog",
        title: "A Sprinkling of Ember",
        authors: ["Robert DeLuca"],
        url: "http://frontside.io/blog/2016-melty-cpu.html",
        publishDate: "UTC12-25-2016:10:10:10:Z01",
        tags: ["disasters", "comedy", "node.js"],
        imageUrl: image(),
        fullText: "How I destroyed my laptop with a single NPM install",
        previewText: "The other day, when blah blah.."
      },
      {
        id: "1dgaf12",
        type: "podcast",
        title: "Implementing a Jenkins Extension Point with the Native Java API inside a Ruby Plugin",
        authors: ["Stephanie Riera", "Charles Lowell"],
        url: "http://frontsidethepodcast.simplecast.fm/1.html",
        publishDate: "UTC12-25-2016:10:14:10:Z01",
        tags: ["podcasts", "ember"],
        imageUrl: image(),
        fullText: "A spirit quest of deep Ember proportions",
        previewText: "Charles and Stephanie discuss how to kick ass at Ember"
      }
    ];
  });
}

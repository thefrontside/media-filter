import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {
        id: "1dgaf10101",
        resourceType: "blog",
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
        resourceType: "podcast",
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
        resourceType: "talk",
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
        resourceType: "blog",
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
        resourceType: "podcast",
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
        resourceType: "talk",
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
  }
});

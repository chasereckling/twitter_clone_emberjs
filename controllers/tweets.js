Haiku.HomeController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['id'],
  actions: {
    addTweet: function() {
      var tweetDate = new Date();
      var tweetHour = tweetDate.getHours();
      var tweetMinutes = tweetDate.getMinutes();
      var newTweet= {id: (tweets.length + 1).toString(), body: this.get('tweet'), timeStamp: tweetDate.toDateString() + ", " + tweetHour + ":" + tweetMinutes};
      tweets.addObject(newTweet);
    }
  }
});

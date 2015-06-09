Haiku.TweetsController = Ember.ArrayController.extend({
  actions: {
    sortByDate: function() {
      this.set('sortProperties', ['title']);
    }
  }
});

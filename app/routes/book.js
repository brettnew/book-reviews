import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('book', params.book_id);
  },
  actions: {
    saveReview(params) {
      if (params.rating === '*'){
        params.rating = 1;
      } else if (params.rating ==='**') {
        params.rating = 2;
      } else if (params.rating === '***') {
        params.rating = 3;
      } else if (params.rating === '****') {
        params.rating = 4;
      } else {
        params.rating = 5;
      }
      var newReview = this.store.createRecord('review', params);
      var book = params.book;
      book.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return book.save();
      });
      this.transitionTo('book', params.book);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  userBookshelf: Ember.inject.service(),
  onBookshelf: Ember.computed('userBookshelf.items.[]', function(){
    return this.get('userBookshelf').includes(this.get('book'));
  }),
  ratingAverage: Ember.computed('reviews.@each.rating', function(){
    var total = 0;
    (this.get('reviews')).forEach(function(review){
      total += review.get('rating');
    });
    return Math.round(total/this.get('reviews').get('length'));
  }),
  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    },
    removeFromShelf(item) {
      this.get('userBookshelf').remove(item);
    },
    addToShelf(item) {
      this.get('userBookshelf').add(item);
      this.sendAction('transitionShelf');
    }
  }
});

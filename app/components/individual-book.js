import Ember from 'ember';

export default Ember.Component.extend({
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
    }
  }
});

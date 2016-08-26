import Ember from 'ember';

export default Ember.Component.extend({
  ratings: ["*", "**", "***", "****", "*****"],
  addNewReview: false,
  actions: {
    addNewReview(){
      this.set('addNewReview', true);
    },
    saveReview(){
      var params = {
        username: this.get('username'),
        rating: this.get('rating'),
        comment: this.get('comment'),
        date: Date.now(),
        book: this.get('book')
      };
      this.sendAction('saveReview', params);
      this.set('addNewReview', false);
      this.set('username', "");
      this.set('rating', "");
      this.set('comment', "");
    }
  }
});

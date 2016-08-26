import Ember from 'ember';

export default Ember.Component.extend({
  userBookshelf: Ember.inject.service(),
  actions: {
    remove(item) {
      this.get('userBookshelf').remove(item);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  editBook: false,
  actions: {
    editBook() {
      this.set('editBook', true);
    },
    delete(book) {
      this.sendAction('delete', book);
    },
    edit(params, book) {
      this.set('editBook', false);
      this.sendAction('edit', params, book);
    }
  }
});

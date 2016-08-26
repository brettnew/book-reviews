import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('book');
  },
  actions: {
    save(params) {
      var newBook = this.store.createRecord('book', params);
      newBook.save();
    },
    delete(book) {
      return book.destroyRecord();
    },
    edit (params, book) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          book.set(key, params[key]);
        }
      });
      book.save();
    }
  }
});

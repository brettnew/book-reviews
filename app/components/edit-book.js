import Ember from 'ember';

export default Ember.Component.extend({
  categories: ['Humor', 'Mystery', 'Fiction', 'Romance', 'Young Adult'],
  actions: {
    edit(book) {
      var params = {
        name: this.get('name'),
        author: this.get('author'),
        summary: this.get('summary'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('editBook', false);
      this.sendAction('edit', params, book);
      this.set('name', "");
      this.set('author', "");
      this.set('summary', "");
      this.set('image', "");
      this.set('category', "");
    }
  }
});

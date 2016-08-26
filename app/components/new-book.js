import Ember from 'ember';

export default Ember.Component.extend({
  categories: ['Humor', 'Mystery', 'Fiction', 'Romance', 'Young Adult'],
  showNewForm: false,
  actions: {
    showNewForm(){
      this.set('showNewForm', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        author: this.get('author'),
        summary: this.get('summary'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.set('showNewForm', false);
      this.sendAction('save', params);
      this.set('name', "");
      this.set('author', "");
      this.set('summary', "");
      this.set('image', "");
      this.set('category', "");
    }
  }
});

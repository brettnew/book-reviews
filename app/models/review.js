import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  date: DS.attr(),
  book: DS.belongsTo('book', {async: true})
});

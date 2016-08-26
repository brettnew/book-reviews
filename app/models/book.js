import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  author: DS.attr(),
  summary: DS.attr(),
  image: DS.attr(),
  category: DS.attr()
});

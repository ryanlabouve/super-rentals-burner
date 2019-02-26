import DS from 'ember-data';

export default DS.Model.extend({
  bookings: DS.hasMany(),

  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr(),
});

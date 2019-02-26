import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id, {include: 'bookings'});
  },
});

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    bookRental(rental, e) {
      e.preventDefault();

      return this.store.createRecord('booking', {
        rental
      }).save();
    }
  }
});

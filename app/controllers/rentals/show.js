import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),
  actions: {
    bookRental(rental, user, e) {
      e.preventDefault();

      return this.store
        .createRecord("booking", {
          rental,
          user
        })
        .save();
    }
  }
});

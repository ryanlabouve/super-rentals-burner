import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),
  actions: {
    bookRental(rental, user, token, _e) {
      // debugger;
      // e.preventDefault();
      return this.store
        .createRecord("booking", {
          rental,
          user,
          stripeInfo: token
        })
        .save();
    },
    test() {
      debugger;
    }
  }
});

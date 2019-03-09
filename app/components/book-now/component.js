import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  stripe: service(),
  onToken: () => {},
  stripeHandler: null,

  didInsertElement() {
    return this.stripe
      .setup({
        onToken: this.onToken
      })
      .then(stripeHandler => {
        this.stripeHandler = stripeHandler;
      });
  },

  // willDestroyElement() {
  //   this.stripe.teardown();
  //   // Do we need to do something here?
  //   Are we causing memory leaks?
  // },

  actions: {
    openPaymentModal(e) {
      e.preventDefault();

      this.stripeHandler.open({
        name: `Book a day pass at ${this.rentalName}`,
        description: "Finish booking your day pass!",
        amount: this.price
      });
    }
  }
});

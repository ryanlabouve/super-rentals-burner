/* global StripeCheckout */
import Service from "@ember/service";

const CHECKOUT_JS_SRC = "https://checkout.stripe.com/checkout.js";

export default Service.extend({
  stripeLoaded: null,

  _installStripe() {
    if (!this.stripeLoaded) {
      return new Promise((resolve, reject) => {
        if (typeof StripeCheckout === "undefined") {
          let stripeJs = document.createElement("script");
          stripeJs.src = CHECKOUT_JS_SRC;
          document.head.appendChild(stripeJs);

          stripeJs.addEventListener("load", function() {
            resolve();
            // remove event listener
          });

          stripeJs.addEventListener("error", function() {
            reject();
            // remove event listener
          });
        }
      });
    } else {
      return this.stripeLoaded;
    }
  },

  setup({ onToken }) {
    return this._installStripe().then(() => {
      return StripeCheckout.configure({
        key: "pk_test_iSgaGw4xoRemHWMd9Tp5F9Th",
        image: "http://builtwithember.io/img/logo.png",
        locale: "auto",
        token: onToken
      });
    });
  }
});

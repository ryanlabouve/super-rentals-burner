import Service from "@ember/service";
import { inject as service } from "@ember/service";

export default Service.extend({
  store: service(),
  session: service(),

  user: null,

  load() {
    let email = this.get("session.data.authenticated.email");

    if (email) {
      return this.get("store")
        .query("user", {
          email
        })
        .then(user => {
          // assert if the lenght > 1
          this.set("user", user.get("firstObject"));
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      return Ember.RSVP.resolve();
    }
  }
});

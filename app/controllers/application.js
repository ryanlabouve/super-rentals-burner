import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import config from "super-rentals/config/environment";

export default Controller.extend({
  session: service(),
  currentUser: service(),
  config: config.torii.providers["github-oauth2"],
  actions: {
    login() {
      let currentUser = this.get("currentUser");
      this.get("session")
        .authenticate("authenticator:torii", "github")
        .then(() => {
          currentUser.load();
        });
    },
    logout() {
      this.get("session").invalidate();
    }
  }
});

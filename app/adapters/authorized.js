import ApplicationAdapter from "./application";
import DataAdapterMixin from "ember-simple-auth/mixins/data-adapter-mixin";

export default ApplicationAdapter.extend(DataAdapterMixin, {
  authorize(xhr) {
    let { access_token } = this.get("session.data.authenticated");
    if (access_token) {
      xhr.setRequestHeader("Authorization", `token ${access_token}`);
    }
  }
});

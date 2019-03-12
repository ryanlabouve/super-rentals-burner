import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import {inject as service} from '@ember/service';
import config from 'super-rentals/config/environment';
import fetch from 'fetch';

export default ToriiAuthenticator.extend({
  torii: service(),
  // restore(data) {
  // },

  // authenticate(/*args*/) {
  // },

  // invalidate(data) {
  // }

  authenticate() {
    // const ajax = this.get('ajax');
    const tokenExchangeUri = config.torii.providers['github-oauth2'].tokenExchangeUri;

    // TODO: move this to fetch or something
    return this._super(...arguments).then((data) => {
      let body = JSON.stringify(data);

      let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }

      let params = {
        method: 'POST',
        headers,
        body
      };

      return fetch(tokenExchangeUri, params).then( (response) => {
        return response.json().then(json => {
          return {
            access_token: json.access_token,
            provider: json.provider,
            email: json.email
          };
        }).catch(error => console.error(error));
      }).catch(error => console.error(error));
    }).catch(error => console.error(error));
  }
});

import DS from 'ember-data';
import config from '../config/environment';

let {host} = config;

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host,
});

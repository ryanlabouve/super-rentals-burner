import { Factory } from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  date(i) {
    return moment().add(i, 'days');
  }
});

import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'https://api.meetup.com/Triangle-Ember/events?key=' + config.MEETUP_KEY + '&sign=true'
});

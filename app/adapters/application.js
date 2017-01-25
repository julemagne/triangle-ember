import DS from 'ember-data';
import environment from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'https://api.meetup.com/Triangle-Ember/events?key=' + environment.MEETUP_KEY + '&sign=true'
});

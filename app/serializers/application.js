import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  keyForAttribute(key) {
    return Ember.String.decamelize(key);
  }

});

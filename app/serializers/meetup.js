import ApplicationSerializer from './application';

export default DS.JSONSerializer.extend({
  
  normalize(modelClass, resourceHash, prop) {
    return this._super(modelClass, resourceHash.data, prop);
  }

});
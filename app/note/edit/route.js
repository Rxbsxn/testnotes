import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.store.peekRecord('note', params.id);
  },
});

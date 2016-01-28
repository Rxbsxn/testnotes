import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectToNote() {
      this.transitionTo('notes');
    },
  },
});

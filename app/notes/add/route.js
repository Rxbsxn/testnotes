import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    redirectToNote(note) {
      this.transitionTo('note', note);
    },
  },
});

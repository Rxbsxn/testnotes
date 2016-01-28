import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNote() {
      this.get('newNote').save();
    },
  },
});

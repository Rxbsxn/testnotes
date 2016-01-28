import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  init() {
    this._super();
    this.set('newNote', {});
  },

  actions: {
    addNote() {
      let newNote = this.get('store').createRecord('note', this.get('newNote'));
      this.sendAction('afterCreate', newNote);
      this.set('newNote', {});
    },
  },
});

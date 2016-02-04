import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  session: Ember.inject.service(),

  init() {
    this._super();
    this.set('newNote', {});
  },

  actions: {
    addNote() {
      if (this.get("session.isAuthenticated"))
      {
        let newNote = this.get('store').createRecord('note', this.get('newNote')).save();
        this.sendAction('afterCreate', newNote);
        this.set('newNote', {});
      }
      else {
        alert("You aren't signed on this website - Please log on");    
      }
    },
  },
});

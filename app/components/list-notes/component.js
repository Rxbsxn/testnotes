import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    remove(note) {
        note.deleteRecord();
        note.save();
        alertify.success('Notatka usunięta');
        this.sendAction('afterRemove');
    },
  },

});

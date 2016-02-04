import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove() {
        this.get('note').deleteRecord();
        this.get('note').save();
        this.sendAction('afterRemove');
    },
  },
});

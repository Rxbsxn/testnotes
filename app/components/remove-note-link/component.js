import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    remove() {
        this.get('note').deleteRecord();
        this.sendAction('afterRemove');
    },
  },
});

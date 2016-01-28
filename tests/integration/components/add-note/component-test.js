import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


let a;

const store = Ember.Service.extend({
    createRecord(type, data) {
      return Ember.Object.create({
        name: data.name,
        content: data.content,
      });
    },
});

moduleForComponent('add-note', 'Integration | Component | add note', {
  integration: true,

  beforeEach: function () {
   this.register('service:store', store);
   this.inject.service('store', { as: 'store' });
  }
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('success', (note) =>{
    assert.equal(note.name, 'test');
    assert.equal(note.content, 'Testowy tekst');
  });

  this.render(hbs`{{add-note afterCreate=(action success)}}`);

  this.$('#noteName').val('test').trigger("change");;
  this.$('#noteContent').val('Testowy tekst').trigger("change");;
  this.$('#noteAdd').click();
});

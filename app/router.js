import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notes', function() {
    this.route('add');
  });

  this.route('note', {path: 'note/:id'}, function() {
    this.route('edit');
  });

});

export default Router;

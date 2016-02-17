import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('docs', function() {
    this.route('getting-started');
    this.route('writing-tasks');
    this.route('task-concurrency');
    this.route('task-concurrency-advanced');
    this.route('cancelation');
    this.route('child-tasks');
    this.route('examples', function() {
      this.route('increment-buttons');
      this.route('loading-ui');
      this.route('autocomplete');
      this.route('task-concurrency');
      this.route('ajax-throttling');
    });
  });
});

export default Router;

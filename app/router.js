import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('questions', {path: '/'}, function(){
    this.resource('question', {path: ':question_id'});
    this.resource('new-question');
    this.resource('answers');

  });
});

export default Router;

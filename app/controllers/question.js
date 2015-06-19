import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var question = this;
      debugger
      question.set('description', this.get('description'));
      question.set('text', this.get('text'));
      question.set('author', this.get('author'));
      question.save();
    },

    delete: function(){
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});

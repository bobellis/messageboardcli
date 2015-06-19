import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        questionText: this.get('questionText'),
        description: this.get('description'),
        author: this.get('author')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});

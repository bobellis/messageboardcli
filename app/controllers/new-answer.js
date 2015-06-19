import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        answerText: this.get('answerText')
      });

      var question = this.get('controllers.question.model');
      answer.save().then(function() {
        question.get('answers').pushObject(answer);
        question.save();
      });
      this.setProperties({
        answerText: ''
      });
      this.transitionToRoute('question', question.id);
    }
  }
});

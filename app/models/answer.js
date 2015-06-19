import DS from 'ember-data';

export default DS.Model.extend({
  answerText: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});

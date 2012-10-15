var Exam = Backbone.Model.extend({})

var ExamQuestions = Backbone.Collection.extend({
    model: Exam,

    //url: 'http://dl.dropbox.com/u/5152028/test.json'
    url: 'http://localhost:1858/boilerplate/test.json'

})
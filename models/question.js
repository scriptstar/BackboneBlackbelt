var Question = Backbone.Model.extend({})

var Questions = Backbone.Collection.extend({
    model:Question,

    //url: 'http://dl.dropbox.com/u/5152028/test.json'
    url:'http://localhost:8010/boilerplate/test.json'
    //url:'http://dl.dropbox.com/u/5152028/test2.json'
});
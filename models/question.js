var Question = Backbone.Model.extend({})

var Questions = Backbone.Collection.extend({
    model:Question,

    //url: 'http://dl.dropbox.com/u/5152028/test.json'
    url:'http://localhost/boilerplate/test.json'
    //url:'http://dl.dropbox.com/u/5152028/test2.json'
});
var AppRouter = Backbone.Router.extend({

    routes: {
        "" : "list"
    },

    list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var questions = new Questions();
        questions.fetch({success: function(){
            $("#container").html(new QandAView({model: questions, page: p}).el);
        }});
    }

});

utils.loadTemplate(['QuestionAnswerView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});


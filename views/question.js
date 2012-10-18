window.QandAView = Backbone.View.extend({

    initialize: function(){
        this.render();
    },

    render: function () {
        var questions = this.model.models ;
        var len = questions.length;

        var startPos = (this.options.page - 1) * 8;
        var endPos = Math.min(startPos + 8, len);

        $(this.el).html('<ul class="thumbnails"></ul>');

        for (var i = startPos; i < endPos; i++) {
            console.log(i);
            $('.thumbnails', this.el).append(new QuestionAnswerView({model: questions[i]}).render().el);
        }
        return this;
    }
});

window.QuestionAnswerView = Backbone.View.extend({

    tagName: "li",

    className: "span3",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        var self =  this;
        var qa = this.model.toJSON();
        $(this.el).html(this.template(qa));
        return this;
    }

});
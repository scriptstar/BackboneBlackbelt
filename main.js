var examQuestions = new ExamQuestions();

examQuestions.fetch({

    success: function () {
        var questionList = examQuestions.toJSON();
        for (var key in questionList[0].questions) {
            var x = questionList[0].questions[key].question;


            for (var key2 in questionList[0].questions[key].choices) {
                var a = questionList[0].questions[key].choices[key2].a;
                var b = questionList[0].questions[key].choices[key2].b;
                var c = questionList[0].questions[key].choices[key2].c;
                var d = questionList[0].questions[key].choices[key2].d;

                var ans = "<ul>";
                ans = ans + "<li>" + a + "</li><li>" + b + "</li><li>" + c + "</li><li>" + d + "</li>";
                ans = ans + "</ul>";
            }

        }

        $('#questiondiv').append(x);
        $('#answerDiv').append(ans);
    }
});



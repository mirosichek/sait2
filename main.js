window.question = new Question("myQuestion","myQuestionID" );
window.answer = new Answer("inputAnsverContainer");
window.db = new DatabaseService;
window.control =new FormController("qa", question, answer);
window.screenController = new ScreenController();

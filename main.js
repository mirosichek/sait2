window.question = new Question("myQuestion", "myQuestionID");
window.answer = new Answer("inputAnsverContainer");
window.db = new DatabaseService();
window.control = new FormController("qa", question, answer);

window.teamCreator = new CreateTeam("inputTeamContainer");
window.teamControl = new FormControllerTeam("createTeamScreen", teamCreator);
window.ShowData = new ShowDataServise(window.db);

window.screenController = new ScreenController();



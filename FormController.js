class FormController {
    constructor(containerId, question, answer) {
        this.container = document.getElementById(containerId);
        this.question = question;
        this.answer = answer;

        this.db = new DatabaseService();

        this.initEvents();
    }

    initEvents() {
        this.container.addEventListener("keydown", async (event) => {
            if (event.key === "Enter") {
                await this.handleSave();
            }
        });
    }

    async handleSave() {
        try {
            const questionText = this.question.getValue();
            const answers = this.answer.getValue();
            const rightAnswers = this.answer.getRight();
            const flag = this.question.getQID();

            const questionId = await this.db.saveQuestion(questionText, flag);
            await this.db.saveAnswers(answers, rightAnswers, questionId);

            this.resetForm();
        } catch (err) {
            alert(err.message);
        }
    }

    resetForm() {
        document.getElementById("myQuestion").value = "";
        document.getElementById("myQuestionID").value = "";
        document.getElementById("inputAnsverContainer").innerHTML = "";

        this.answer.arrAn = [];
        this.answer.isCorrect = [];
    }
}

class FormControllerTeam extends FormController {
    constructor(containerId, teamCreator) {
        super(containerId); 
        this.teamCreator = teamCreator;
        this.db = new DatabaseService();
    }

    async handleSave() {
        try {
            const teams = this.teamCreator.getTeams();
            const numbers = this.teamCreator.getNumbers();

            if (teams.length === 0) {
                alert("Добавьте хотя бы одну команду");
                return;
            }

            await this.db.saveTeams(teams, numbers);
            this.teamCreator.reset();

            alert("Команды успешно сохранены!");
        } catch (err) {
            alert(err.message);
        }
    }
}


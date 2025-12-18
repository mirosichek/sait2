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

class Answer {
    constructor(containerId, countInputId) {
        this.container = document.getElementById(containerId);
        this.countInput = document.getElementById(countInputId);
    }

    addInputs() {
        const count = parseInt(this.countInput.value);

        if (!count || count < 1 || count > 10) {
            alert("Введите число от 1 до 10");
            return;
        }

        this.container.innerHTML = "";

        for (let i = 0; i < count; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Ответ ${i + 1}`;

            input.addEventListener("keydown", async (event) => {
                if (event.key === "Enter") {

                    if (!currentQuestionId) {
                        alert("Сначала напишите вопрос и нажмите Enter!");
                        return;
                    }

                    const answer = event.target.value.trim();
                    if (!answer) return;

                    await this.toDatabase(answer);
                    event.target.value = "";
                }
            });

            this.container.appendChild(input);
            this.container.appendChild(document.createElement("br"));
            this.container.appendChild(document.createElement("br"));
        }
    }

    async toDatabase(answer) {
        const { error } = await supabase
            .from('QuestionAnswer')
            .update({ Answer: answer })
            .eq("id", currentQuestionId);

        if (error) {
            alert("Ошибка сохранения ответа: " + error.message);
        }
    }
}

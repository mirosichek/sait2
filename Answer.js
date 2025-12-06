class Answer {
    constructor(containerId, countInputId) {
        this.container = document.getElementById(containerId);
        this.countInput = document.getElementById(countInputId);
        this.arrAn = [];
        this.isCorrect=[];

    }

    addInputs() {
    // const count = parseInt(this.countInput.value);

    // if (!count || count < 1 || count > 10) {
    //     alert("Введите число от 1 до 10");
    //     return;
    // }
    this.arrAn = new Array(count).fill("");
    this.isCorrect = new Array(count).fill(false);

    this.isCorrect.fill(false);
    this.container.innerHTML = "";

    // for (let i = 0; i < count; i++) {

        const wrapper = document.createElement("div");
        wrapper.classList.add("answer-row");

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Ответ ${i + 1}`;

        input.addEventListener("input", () => {
            this.arrAn[i] = input.value.trim();
        });

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "✔";
        button.classList.add("correct-btn");

        button.addEventListener("click", () => {
            this.isCorrect[i] = true;

            document
                .querySelectorAll(".correct-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");
        });

        wrapper.appendChild(input);
        wrapper.appendChild(button);
        this.container.appendChild(wrapper);
    // }
}

    getValue() {
        return this.arrAn;
    }

    getRight(){
        return this.isCorrect;
    }
}


    // async toDatabase(answer) {
    //     const { error } = await supabase
    //         .from('QuestionAnswer')
    //         .update({ Answer: answer })
    //         .eq("id", currentQuestionId);

    //     if (error) {
    //         alert("Ошибка сохранения ответа: " + error.message);
    //     }
    // }
// }

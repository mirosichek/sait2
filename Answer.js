class Answer {
    constructor(containerId, countInputId) {
        this.container = document.getElementById(containerId);
        this.countInput = document.getElementById(countInputId);
        this.arr = [];
    }

    addInputs() {
        const count = parseInt(this.countInput.value);

        if (!count || count < 1 || count > 10) {
            alert("Введите число от 1 до 10");
            return;
        }

        this.arr = []; 
        this.container.innerHTML = "";

        for (let i = 0; i < count; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Ответ ${i + 1}`;

            input.addEventListener("input", () => {
                this.arr[i] = input.value.trim();
            });

            this.container.appendChild(input);
            this.container.appendChild(document.createElement("br"));
        }
    }

    getValue() {
        return this.arr;
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

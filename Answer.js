class Answer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.arrAn = [];
        this.isCorrect = [];
    }

    addInputs() {
        const i = this.arrAn.length; 

        this.arrAn.push("");
        this.isCorrect.push(false);

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
            this.isCorrect.fill(false);

            document
                .querySelectorAll(".correct-btn")
                .forEach(btn => btn.classList.remove("active"));

            this.isCorrect[i] = true;
            button.classList.add("active");
        });

        wrapper.appendChild(input);
        wrapper.appendChild(button);
        this.container.appendChild(wrapper);
    }

    getValue() {
        return this.arrAn;
    }

    getRight() {
        return this.isCorrect;
    }
}

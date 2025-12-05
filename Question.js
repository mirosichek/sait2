// === ИНИЦИАЛИЗАЦИЯ SUPABASE ===
const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


class Question {
    constructor(elementId) {
            this.element = document.getElementById(elementId);
            this.setupEventListener();
    }

    setupEventListener() { 
        this.element.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const question = event.target.value;
                this.toDatabase(question);
                event.target.value = "";
            }
        });
    }

    async toDatabase(question) {
        const { error } = await supabase
            .from('Questions')
            .insert({ Question: question });

        if (error) {
            alert("Ошибка сохранения в БД:", error);
        } else {
            alert("Вопрос сохранён в БД:", question);
        }
    }
}


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

            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    const answer = event.target.value.trim();
                    this.toDatabase(answer);
                    event.target.value = "";
                }
            });

            this.container.appendChild(input);
            this.container.appendChild(document.createElement("br"));
            this.container.appendChild(document.createElement("br"));
        }
    }

}

new Question('myQuestion');
const answer = new Answer('inputAnsverContainer', 'inputCount');

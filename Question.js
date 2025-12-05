// === ИНИЦИАЛИЗАЦИЯ SUPABASE ===
const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';

const supabase = supabase.createClient(supabaseUrl, supabaseKey);


// === КЛАСС ДЛЯ СОХРАНЕНИЯ ВОПРОСА ===
class Question {
    constructor(elementId) {
        document.addEventListener("DOMContentLoaded", () => {
            this.element = document.getElementById(elementId);

            if (!this.element) {
                console.error(`Элемент с id="${elementId}" не найден.`);
                return;
            }

            this.setupEventListener();
        });
    }

    setupEventListener() {
        this.element.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const value = event.target.value.trim();
                if (!value) return;

                this.toDatabase(value);
                this.element.value = "";
            }
        });
    }

    async toDatabase(question) {
        const { error } = await supabase
            .from('Questions')
            .insert({ Question: question });

        if (error) {
            console.error("Ошибка сохранения в БД:", error);
        } else {
            console.log("Вопрос сохранён в БД:", question);
        }
    }
}


// === ДОБАВЛЕНИЕ ИНПУТОВ ДЛЯ ОТВЕТОВ ===
function addInputs() {
    const count = parseInt(document.getElementById("inputCount").value);

    if (!count || count < 1 || count > 10) {
        alert("Введите число от 1 до 10");
        return;
    }

    const container = document.getElementById("inputAnsverContainer");
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Ответ ${i + 1}`;

        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const answer = event.target.value.trim();
                console.log("Ответ:", answer);

                event.target.value = "";
            }
        });

        container.appendChild(input);
        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    }
}


// === СОЗДАНИЕ ОБЪЕКТА ВОПРОСА ===
new Question('myQuestion');

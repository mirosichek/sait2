const supabaseUrl = 'https://zxdprwvrgzqpxyvxksud.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4ZHByd3ZyZ3pxcHh5dnhrc3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MDI5NjQsImV4cCI6MjA3OTA3ODk2NH0.Rd8UXhHz97ifIrSezDkcBNzBn18_wAVtY_mUVCf32FE';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

class Question {
    constructor() {
        this.question = "";
        this.answer = "";
    }

    update() {
        this.question = document.getElementById("myQuestion").value;
        this.answer = document.getElementById("Answer").value;

        this.render();
        this.log();
    }

    render() {
        document.getElementById("result").innerText =
            "Вопрос: " + this.question + "\nОтвет: " + this.answer;
    }

    log() {
        console.log("Сохранено:", {
            question: this.question,
            answer: this.answer
        });
    }
}

const savedValue = new Question();

function save() {
    savedValue.update();
}

